import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Main from './Pages/Main';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Outlet></Outlet>
      
    </>
  )
}

export default App
