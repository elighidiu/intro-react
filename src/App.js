//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App"> 
    <Header/>
    <Form />
    <div className="content">
    <h2>Todos</h2>
    </div>
    <List />
    </div>
  );
}

export default App;
