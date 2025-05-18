import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import About from './components/about/About'
import Home from './pages/home/Home'
import ScrollToHash from './components/scrolltohash/ScrollToHash'

function App() {

  return (
    <>  
    <ScrollToHash/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
