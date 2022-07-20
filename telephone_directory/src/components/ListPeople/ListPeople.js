import './ListPeople.css';
export default function ListPeople({ contacts }) {
  // console.log(contacts);
  return (
    <div className='card w-40 mx-10 px-30 py-30'>
      <h3 className='pt-10'> Contact List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>{contact.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
