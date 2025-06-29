import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import '@fontsource/inter'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <AppRoutes />
    <Footer />
  </BrowserRouter>
  </StrictMode>,
)
