
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages Import 
import Home from './pages/Home.jsx'
import SignInPage from './pages/SignInPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

