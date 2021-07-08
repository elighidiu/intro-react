//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import React, { useState } from 'react';

let count = 0; 

function App() {

  const initialTodos = [
    { id:count++, task: "Learn React", checked: false },
    { id:count++, task: "Be awesome!", checked: false },
    { id:count++, task: "No headaches", checked: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App"> 
    <Header/>
    <Form todos={todos} setTodos={setTodos} count={count}/>
    <div className="content">
    <h2>Todos</h2>
    </div>
    <List todos={todos} setTodos={setTodos}/>
    
    
    </div>
  );
}

export default App;
