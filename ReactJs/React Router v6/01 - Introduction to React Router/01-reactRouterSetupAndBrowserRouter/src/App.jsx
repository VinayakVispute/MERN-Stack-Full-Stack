import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, About } from './Pages'
// import About from './Pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
