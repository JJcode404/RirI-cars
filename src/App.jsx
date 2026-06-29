import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-outfit bg-brand-bg">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
