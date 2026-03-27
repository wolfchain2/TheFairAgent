import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BootcampPage from './pages/BootcampPage.tsx'
import Header from './sections/Header.tsx'
import Footer from './sections/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bootcamp" element={<BootcampPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
