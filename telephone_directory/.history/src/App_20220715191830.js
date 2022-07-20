import { useState } from 'react';
import './App.css';
import 'h8k-components';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
const title = 'Telephone Directory';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'John Doe',
      number: '1234567890',
      email
    },
    {
      name: 'Jane Doe',
      number: '1234567890',
    },
  ]);
  console.log(persons);
  // const { persons } = props;

  // const persons = (data) => {
  //   // console.log(data);
  // };
  // let persons = [
  //   {
  //     name: 'John Doe',
  //     number: '123456789',
  //     email: 'johndoe@email.com'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     number: '987654321',
  //     email: 'janedoe@email.com'
  //   },
  // ]
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='flex align-items-center justify-content-center container'>
        <AddPerson />
        <ListPeople persons={persons} />
      </div>
    </div>
  );
};

export default App;
