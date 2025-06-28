import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import '@fontsource/inter'
import Footer from './components/Footer/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
    <Footer />
  </StrictMode>,
)
