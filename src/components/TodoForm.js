import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder='Plan your daily tasks' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className='todo-btn' > {editId ? "Edit" : "Add Task"}</button>
        </form>
  );
};

export default TodoForm;