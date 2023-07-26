import './App.scss';
import { Form } from './components/Form';
import { Table } from './components/Table';

function App() {
  return (
    <div className="app">
      <h1>User Managment</h1>
      <Form />
      <Table />

    </div>
  );
}

export default App;
