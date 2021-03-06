import './ListPeople.css';
export default function ListPeople(props) {
  console.log(props);
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
          {/* {persons &&
            persons.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                  <td>{person.email}</td>
                </tr>
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
}
