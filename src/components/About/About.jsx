import { MdCheckCircle, MdArrowForward, MdPhone } from 'react-icons/md'
import { whyChooseUs } from '../../data/services'

export default function About() {
  return (
    <section id="about" className="section-gap bg-brand-bg">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            {/* Main image */}
            <div className="relative rounded overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=800&q=80&auto=format&fit=crop"
                alt="RIRI CARS Showroom"
                className="w-full h-[420px] object-cover"
              />
              {/* Red overlay accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-red-shine" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary rounded p-5 shadow-red-glow text-center hidden sm:block">
              <p className="text-white font-black text-4xl leading-none">14+</p>
              <p className="text-white/80 text-xs font-semibold mt-1 uppercase tracking-wider">
                Years of<br />Excellence
              </p>
            </div>

            {/* Small floating image */}
            <div className="absolute -top-6 -left-4 lg:-left-8 w-36 h-28 rounded overflow-hidden shadow-card-hover border-2 border-white hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=300&q=80&auto=format&fit=crop"
                alt="Car interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              About RIRI CARS
            </span>
            <h2 className="section-title mt-1 text-3xl lg:text-4xl">
              Why Thousands Choose
              <br />
              <span className="text-primary">RIRI CARS</span>
            </h2>
            <div className="divider-red mt-3 mb-5" />

            <p className="text-muted leading-relaxed mb-3">
              Founded in 2010, RIRI CARS has grown to become Kenya's most trusted
              automotive dealership. We provide an unparalleled car-buying
              experience — from initial consultation to after-sales support.
            </p>
            <p className="text-muted leading-relaxed mb-7">
              Our expert team of automotive professionals is dedicated to helping
              you find the perfect vehicle that fits your lifestyle and budget,
              with complete transparency and no pressure.
            </p>

            {/* Why Choose Us List */}
            <ul className="space-y-3 mb-8">
              {whyChooseUs.map(({ id, text }) => (
                <li key={id} className="flex items-start gap-3">
                  <MdCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                  <span className="text-dark text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#featured" className="btn-primary">
                Browse Inventory
                <MdArrowForward />
              </a>
              <a
                href="tel:+254700000000"
                className="btn-secondary flex items-center gap-2"
              >
                <MdPhone />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
