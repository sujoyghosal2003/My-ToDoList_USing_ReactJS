import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, addTask, toggleTaskCompletion, deleteTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      className='inputField'/>
      <button className="add-btn" onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
