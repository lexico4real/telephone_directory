import { useState } from 'react';
import './App.css';
import 'h8k-components';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
const title = 'Telephone Directory';

const App = () => {
  // const { persons } = props;
  let persons = [
    {
      name: 'John Doe',
      number: '123456789',
      email: 'johndoe@email.com'
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='flex align-items-center justify-content-center container'>
        <AddPerson />
        <ListPeople persons={[
          {
            name: 'John Doe',
            number: '123456789',
            email: 'jdoe@email.com'
          },
        ]} />
      </div>
    </div>
  );
};

export default App;
