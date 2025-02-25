import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} /> 
    </Routes>
     <Dashboard />
    </>
  )
}

export default App
