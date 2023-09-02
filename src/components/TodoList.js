import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


const TodoList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <ul className="Todos">
      {tasks.map((task) => (
        <li className="Todo">
          <span className="todoText" key={task.id}>
            {task.todo}
          </span>
          <FontAwesomeIcon icon={faPenToSquare} className="icon"  onClick={() => handleEdit(task.id)} /> 
          <FontAwesomeIcon icon={faTrash} className="icon"  onClick={() => handleDelete(task.id) } />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;