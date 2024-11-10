import React from 'react'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Welcome from './components/Welcome'

function App() {

  return (<>
  <Toaster />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='Register' element={<Register/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='welcome' element={<Welcome/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
