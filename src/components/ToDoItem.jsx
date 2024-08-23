import React, { useState } from 'react';

function ToDoItem({ task, toggleTaskCompletion, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    setIsEditing(false);
    task.text = editedText;
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? 'completed' : ''}>
          {task.text}
        </span>
      )}
      <button className="complete-btn" onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
      {isEditing ? (
        <button className="save-btn" onClick={handleSave}>Save</button>
      ) : (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
}

export default ToDoItem;
