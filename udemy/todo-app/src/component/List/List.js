import React from 'react';
import './List.css';

function List(props) {

  const list = props.todos.map((todo, index) => {
    return (
      <li key={index}>
        #{todo.id} {todo.title}
        <button onClick={() => props.deleteTodo(todo.id)}>
          delete
        </button>
      </li>
    );
  });

  return (
    <div className="List">
     <h2>This is List!</h2>
     <ul>{list}</ul>
    </div>
  );
}

export default List;
