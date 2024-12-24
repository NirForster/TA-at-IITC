import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

// Components
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
)
