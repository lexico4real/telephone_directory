import React from 'react';
import './App.css';
import 'h8k-components';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
const title = 'Telephone Directory';

const App = (props) => {
  // load contacts props
  const [contacts, setContacts] = React.useState([]);
  // load search props
  const [search, setSearch] = React.useState({
    name: '',
    tag: '',
  });
  // load error props
  const [error, setError] = React.useState('');
  
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='flex align-items-center justify-content-center container'>
        <AddPerson />
        <ListPeople contacts={props.persons} />
      </div>
    </div>
  );
};

export default App;
