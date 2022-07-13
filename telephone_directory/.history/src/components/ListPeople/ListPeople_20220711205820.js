import "./ListPeople.css";
export default function ListPeople(props) {

  const [name]
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
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
