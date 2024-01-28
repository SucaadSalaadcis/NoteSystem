import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Note from './pages/addNote'
function App() {
  return (
    <div>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addNote' element={<Note/>}/>
    </Routes>

    </div>
  )
}

export default App