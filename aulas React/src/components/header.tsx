import { Link } from 'react-router-dom'
function Header(){
  return (
    <div>
    <h1>Header</h1>

    <Link to='/footer'>
    <p>Footer</p>
    </Link>

    </div>

  )
}
export default Header