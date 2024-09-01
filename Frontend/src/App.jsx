
import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './component/Login'
import LandingPage from './component/LandingPage'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import Register from './component/Register'
import Features from './component/Features'
import { auth } from './component/Firebase'
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)
    })
  })


  return (

      <Routes>
      <Route exact path='/' element={user ? <Navigate to={'/home'} /> : <Navigate to={'/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/aboutUs" element={<Features />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
    </Routes>

  )
}

export default App
