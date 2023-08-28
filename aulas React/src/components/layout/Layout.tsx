import { Outlet } from 'react-router-dom'

import Footer from "../Footer";
import Infos from "../infos/infos";
import Menu from "../menu/Menu";

function Layout(){
  return(
    <>
      <Menu />
      <Infos />
      <Outlet/>
      <Footer/>
    </>
  );
}
export default Layout;