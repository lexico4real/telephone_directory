import React from 'react';
import './App.css';
import 'h8k-components';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
const title = 'Telephone Directory';

const contacts = () => {
  return [
    {
      name: 'John Doe',
      number: '1234567890',
      email: 'johndoe@email.com',
    },
  ];
};

const App = () => {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='flex align-items-center justify-content-center container'>
        <AddPerson />
        <ListPeople persons={contacts} />
      </div>
    </div>
  );
};

export default App;
