import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from '../App'
import BlogIndex from '../components/Pages/blog'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<BlogIndex />} />
    </Routes>
  )
}

export default AppRoutes