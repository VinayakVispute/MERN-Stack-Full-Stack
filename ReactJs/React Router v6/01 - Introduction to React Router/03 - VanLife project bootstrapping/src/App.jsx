import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { Home, About } from './Pages'
import { Navbar } from './components'
function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>

    </>
  )
}

export default App;
