import Detail from './data';
import { Button, Table } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <h2>Data User</h2>
      <table>
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Andi</td>
            <td>andikharisma24@gmail.com</td>
            <td>
              <Detail href='/'>
                <a>Detail</a>
              </Detail>
              <Button>Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
