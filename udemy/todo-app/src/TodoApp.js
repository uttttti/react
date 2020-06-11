import React, { useState } from 'react';
import List from './component/List/List';
import AddTodo from './component/AddTodo/AddTodo'

function TodoApp() {

  const [state, setState] = useState({
    todos: [
      { id: 0, title: "title0" },
      { id: 1, title: "title1" },
      { id: 2, title: "title2" },
      { id: 3, title: "title3" },
      { id: 4, title: "title4" }
    ],
    nextId: 4
  });

  const addTodo = title => {
    setState(
      {
        todos: [
          ...state.todos,
          {id: state.nextId + 1, title: title}
        ],
        nextId: state.nextId + 1
      }
    )
  }

  const deleteTodo = id => {
    setState(
      { 
        todos: state.todos.filter(todo => todo.id !== id),
        nextId: state.nextId
      }
    )
  }

  return (
    <div className="TodoApp">
      <h1>This is TodoApp!</h1>
      <AddTodo addTodo={addTodo} />
      <List todos={state.todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
