import { useState } from 'react';
import './AddPerson.css';
export default function AddPerson() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [persons, setPersons] = useState([]);

  const addPersonHandler = (e) => {
    e.preventDefault();
    if (name === '' || number === '' || email === '') {
      alert('Enter Valid Data');
    } else {
      const newPerson = {
        name,
        number,
        email,
      };
      setName('');
      setNumber('');
      setEmail('');
      setPersons([...persons, newPerson]);
      alert('Successfully Added');
    }
    console.log(persons);
  };

  const sendData = () => {
    console.log(persons);

    fetch('http://localhost:3001/api/persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persons),
    })
      .then((response) => response.json())
    


  return (
    <section>
      <div className='card pa-30 mr-30'>
        <form data-testid='add-person-form' onSubmit={addPersonHandler}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>
              Person Name
            </label>
            <input
              placeholder='Enter Person Name'
              name='name'
              type='text'
              data-testid='person-name-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='number' className='mb-3'>
              Phone Number
            </label>
            <input
              placeholder='Enter Phone Number'
              name='number'
              type='number'
              data-testid='phone-number-input'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='email' className='mb-3'>
              Email
            </label>
            <input
              placeholder='Enter Email Address'
              name='email'
              type='email'
              data-testid='person-email-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='add-person-button'
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
