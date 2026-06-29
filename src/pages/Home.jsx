import Hero from '../components/Hero/Hero'
import FeaturedCars from '../components/FeaturedCars/FeaturedCars'
import Stats from '../components/Stats/Stats'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Newsletter from '../components/Newsletter/Newsletter'
import CTA from '../components/CTA/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCars />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Newsletter />
      <CTA />
    </main>
  )
}
