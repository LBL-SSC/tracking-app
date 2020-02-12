import React from 'react';
import './ToDo.css';

function ToDo ({ todo, toggleCompleted }) {
    return (
      <li
        className = {todo.completed ? `completed` : ''}
        onClick = {() => toggleCompleted(todo.id)}
      >
        {todo.task}

      </li>
    );
  }

  export default ToDo;