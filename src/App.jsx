import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import Footer from './components/Footer/Footer'
import FloatingSocials from './components/FloatingSocials/FloatingSocials'

export default function App() {
  return (
    <div className="min-h-screen font-outfit bg-brand-bg">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Inventory />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingSocials />
    </div>
  )
}
