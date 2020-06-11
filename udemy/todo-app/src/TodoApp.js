import React from 'react';
import List from './component/List/List';
import AddTodo from './component/AddTodo/AddTodo'

function TodoApp() {
  return (
    <div className="TodoApp">
      This is TodoApp!
      <List />
      <AddTodo />
    </div>
  );
}

export default TodoApp;
