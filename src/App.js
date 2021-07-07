//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <Header className="Header"/>
    <Form />
    <h2>Todos</h2>
    <List />
    </div>
  );
}

export default App;
