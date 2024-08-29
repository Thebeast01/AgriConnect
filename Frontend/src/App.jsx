

import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginSignupForm from './component/LoginSignUp'
import LandingPage from './component/LandingPage'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignupForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </Router >

  )
}

export default App
