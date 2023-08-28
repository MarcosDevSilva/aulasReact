import {  useParams } from 'react-router-dom'

function Infos(){
  const params = useParams();
  console.log(params);
  const { namoreDpParam } = params;
  return(
    <>
     <h3>Infos do Paramams</h3>
     <p>{namoreDpParam}</p>
    </>
  )
}
export default Infos;