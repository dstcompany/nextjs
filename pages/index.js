// import './bootstrap/dist/css/bootstrap.min.css';
// import Styles from 'style-loader!css-loader?modules!./assets/global.css';
import Link from 'next/link'
function HomePage() {
  return(
    <div>
      Welcome to Next.js!
      <div>
        <Link href="/todo_list">
          <a>Todo List</a>
        </Link>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                nama
              </td>
              <td>
                email
              </td>
              <td>
                <Link href="/user_details" passHref>
                  <a style={{
                      textDecoration: "none"
                    }}>Show</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    </div>
  )
}

export default HomePage