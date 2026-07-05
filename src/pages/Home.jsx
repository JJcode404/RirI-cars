import BrandScroll from '../components/BrandScroll/BrandScroll'
import FeaturedCars from '../components/FeaturedCars/FeaturedCars'
import Stats from '../components/Stats/Stats'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import RecentlySold from '../components/RecentlySold/RecentlySold'
import Newsletter from '../components/Newsletter/Newsletter'
import CTA from '../components/CTA/CTA'

export default function Home() {
  return (
    <main>
      <FeaturedCars />
      <BrandScroll />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <RecentlySold />
      <Newsletter />
      <CTA />
    </main>
  )
}
