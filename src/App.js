//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App">
    <Header />
    <Form />
    <h2>Todos</h2>
    <List name="Learn  react"/>
    <List name="Be Awesome"/>
    </div>
  );
}

export default App;
