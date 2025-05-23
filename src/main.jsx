import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>

  </RouterProvider>
  </React.StrictMode>,
)
