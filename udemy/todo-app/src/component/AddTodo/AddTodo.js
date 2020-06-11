import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo(props) {

  const [title, setState] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(title)
    setState('');
  };

  const handleChange = e => {
    const title = e.target.value;
    setState(title);
  };

  return (
    <div className="AddTodo">
     <h2>This is AddTodo!</h2>
     <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <input type="submit" value="Add to todo list" />
      </form>
    </div>
  );

}

export default AddTodo;
