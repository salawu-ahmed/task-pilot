import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/pages/Home'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} /> 
    </Routes>
     <Dashboard />
    </>
  )
}

export default App
