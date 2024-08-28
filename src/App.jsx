import { Container } from '@mui/material'
import LoginSignupForm from './component/LoginSignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './component/LandingPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignupForm />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router >

  )
}

export default App
