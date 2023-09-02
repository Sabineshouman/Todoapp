import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Navbar from './Navbar';
import { db } from '../firebaseConfig';
import { query, collection, onSnapshot,setDoc, QuerySnapshot, deleteDoc, doc, updateDoc, addDoc } from 'firebase/firestore';

const TodoWrapper = () => {
    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(0);

    useEffect (() => {
      const q = query(collection(db,"todos"))
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let todosArr = [] 
        QuerySnapshot.forEach((doc) =>{
          todosArr.push({...doc.data(), id:doc.id})
        });
        setTasks(todosArr)
      })
      return () => unsubscribe()
    },[]) 

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (editId) {
        const updatedTasks = tasks.map((task) =>{
          if (task.id === editId) {
            return { ...task, todo};

          } return task;
        });
        setTasks(updatedTasks);
        setEditId(0);
        setTodo('');
        return;
      }
  
      if (todo.length > 0 ) {
        const newTask = { id: Math.floor(Math.random() * 10000), todo,};
        setTasks([newTask, ...tasks]);
        setTodo("");
        await addDoc(collection(db, 'todos'),{
          id: Math.floor(Math.random() * 10000),
          todo,
        });
      }
    };
  
    const handleDelete = async(id) => {
      const deleteTask = tasks.filter((task) => task.id !== id);
      setTasks([...deleteTask]);
      const docRef = doc(db, "todos", id);
      await deleteDoc(docRef);
    };
  
    const handleEdit = async(id) => {
      const editTask = tasks.find((task) => task.id === id);
      setTodo(editTask.todo);
      setEditId(id);
      const docRef = doc(db, "todos", id);
      await setDoc(docRef, { todo: editTask.todo });
      

    };
  
    return (
      <div className="TodoWrapper">
        <Navbar /> 
        <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo}/>
        { }
        <TodoList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    );
  };

export default TodoWrapper;