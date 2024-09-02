import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './outlet.jsx'
import LandingPage from './component/LandingPage.jsx'
import Register from './component/Register.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Login from './component/Login.jsx'
import ChatInterface from './Pages/ChatInterface.jsx'
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
