import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  
  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
