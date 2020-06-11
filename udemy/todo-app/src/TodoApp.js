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

  return (
    <div className="TodoApp">
      This is TodoApp!
      <AddTodo addTodo={addTodo} />
      <List todos={state.todos}　/>
    </div>
  );
}

export default TodoApp;
