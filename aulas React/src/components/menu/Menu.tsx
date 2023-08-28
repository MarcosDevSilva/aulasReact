import { NavLink } from 'react-router-dom'
function Menu(){
  return(
    <nav>
      <NavLink to='/'>Home </NavLink>
      <NavLink to='/footer'> Footer</NavLink>
    </nav>
  )
}
export default Menu;