import { useNavigate, useLocation } from 'react-router-dom'

function Footer(){
  const navegate = useNavigate();
  const location = useLocation();
  console.log(location);
  function handleClick(){
    return(
      navegate('/')
      
    )
  }
  return(
    <div> 
    <h1>segundo teste</h1>
    <button onClick={ handleClick} type="button">Voltar</button>
    </div>
  )
}
export default Footer