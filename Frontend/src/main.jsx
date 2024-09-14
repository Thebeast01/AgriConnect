import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './outlet.jsx'
import LandingPage from './Pages/LandingPage/LandingPage.jsx'
import Register from './Pages/Farmer/Register.jsx'
import Dashboard from './Pages/Farmer/Dashboard.jsx'
import Login from './Pages/Farmer/Login.jsx'
import ChatInterface from './Pages/Farmer/ChatInterface.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <LandingPage />
      },
      {
        path: 'register',
        element: <Register />
      }, {
        path: 'dashboard',
        element: <Dashboard />
      }, {
        path: 'login',
        element: <Login />
      }, {
        path: 'chat',
        element: <ChatInterface />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
