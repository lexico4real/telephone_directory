import React from 'react';
import './App.css';
import 'h8k-components';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
const title = 'Telephone Directory';

const App = (props) => {
  // load contacts from local storage
  const contacts = JSON.parse(localStorage.getItem('contacts'));
  const [persons, setPersons] = React.useState(contacts || []);
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
