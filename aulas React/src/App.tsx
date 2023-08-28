import './App.css'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Infos from './components/infos/infos'
import Layout from './components/layout/Layout'



function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Header /> }/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/infos/:namoreDpParam' element={ <Infos /> } />
      </Route>

      <Route path='/*' element={ <NotFound /> } />
    </Routes>
    </>
  )
}

export default App

