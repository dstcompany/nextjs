import Link from 'next/link';

const Todo = () =>{
    return(
      <div>
        <h3>Todo list</h3>
        <Link href="/todo_list/new">
          <button>New</button>
        </Link>
        <table border="1">
          <thead>
            <tr>
              <td>Username</td>
              <td>Title</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Nama
              </td>
              <td>
                Nama
              </td>
              <td>
                Nama
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Todo;