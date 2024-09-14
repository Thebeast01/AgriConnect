
import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Farmer/Login'
import LandingPage from './Pages/LandingPage/LandingPage'
import AboutUs from './Pages/LandingPage/AboutUs'
import ContactUs from './Pages/LandingPage/ContactUs'
import Register from './Pages/Farmer/Register'
import Features from './Pages/LandingPage/Features'
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
