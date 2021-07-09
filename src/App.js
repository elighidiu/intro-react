//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import React, { useState, useEffect } from 'react';

let count = 0;
const LSKEY = "MyTodoApp";

function App() {

  const initialTodos = [
    { id: count++, task: "Learn React", checked: false },
    { id: count++, task: "Be awesome!", checked: false },
    { id: count++, task: "No headaches", checked: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  // Load saved  todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));

  }, [todos]);

  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} count={count} />
      <div className="content">
        <h2>Todos</h2>
      </div>
      <List todos={todos} setTodos={setTodos} />


    </div>
  );
}

export default App;
