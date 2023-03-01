import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import DisplayList from './components/DisplayList';

function App() {

  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} />
      <DisplayList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
