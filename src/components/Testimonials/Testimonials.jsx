import { MdFormatQuote, MdStar, MdStarBorder } from 'react-icons/md'
import { testimonials } from '../../data/testimonials'

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <MdStar key={i} className="star-filled text-lg" />
      ) : (
        <MdStarBorder key={i} className="star-empty text-lg" />
      )
    )}
  </div>
)

export default function Testimonials() {
  return (
    <section className="section-gap bg-dark-nav relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold text-xs uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="text-white font-bold text-3xl mt-1">
            What Our Clients Say
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 mb-1 mx-auto" />
          <p className="text-white/60 text-sm mt-3 max-w-lg mx-auto">
            Don't take our word for it — hear from thousands of satisfied
            customers who found their perfect vehicle with RIRI CARS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <MdFormatQuote className="text-primary text-4xl mb-4 opacity-80" />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-white/80 text-sm leading-relaxed mt-4 mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/10">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '2,400+', label: 'Reviews on Google' },
            { value: '98%', label: 'Customer Satisfaction' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-accent font-black text-2xl">{value}</p>
              <p className="text-white/50 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
