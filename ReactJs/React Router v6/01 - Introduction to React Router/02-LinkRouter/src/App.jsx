import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Home,
  About
} from './Pages'

function App() {
  const [value, setValue] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  function increaseHandler() {
    setValue(value + 1);
  }

  function userHandler() {
    if (!currentUser) {
      setCurrentUser(prompt("Enter the User Name:"));
    } else {
      alert("User is " + currentUser);
    }
  }

  return (
    <>
      <nav>
        <ul>
          <Link to={{ pathname: '/', state: { value, increaseHandler, currentUser, userHandler } }}>Home</Link>
          <br />
          <br />
          <Link to={{ pathname: '/about', state: { value, increaseHandler, currentUser, userHandler } }}>About Information</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home value={value} increaseHandler={increaseHandler} currentUser={currentUser} userHandler={userHandler} />} />
        <Route path='/about' element={<About value={value} increaseHandler={increaseHandler} currentUser={currentUser} userHandler={userHandler} />} />
      </Routes>
    </>
  )
}

export default App
