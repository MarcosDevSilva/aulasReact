import { NavLink } from 'react-router-dom'
function Menu(){
  return(
    <nav>
      <NavLink to='/'>Homes </NavLink>
      <NavLink to='/footer'> Footeres</NavLink>
    </nav>
  )
}
export default Menu;