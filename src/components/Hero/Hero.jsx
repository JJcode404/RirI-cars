import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import SearchBar from '../SearchBar/SearchBar'
import { company } from '../../data/company'
import heroBg from '../../assets/riri banner/riri-showroom.jpg'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const heroRef = useRef(null)
  const shouldReduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Background moves slower than scroll — classic parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, 100])

  // Helper: skip initial state when reduced motion is on
  const init = (props) => (shouldReduce ? false : props)
  const trans = (duration, delay = 0) =>
    shouldReduce ? { duration: 0 } : { duration, delay, ease }

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-8 md:pb-12 pt-28 md:pt-32 overflow-hidden"
    >
      {/* Parallax wrapper — contains Ken Burns layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-15%]"
        aria-hidden="true"
      >
        <div
          className="hero-kenburns"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(11,26,49,0.80) 50%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Top red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-shine" aria-hidden="true" />

      {/* Content */}
      <div className="max-w-container mx-auto px-6 w-full relative z-10">
        {/* Location badge */}
        <motion.div
          initial={init({ opacity: 0, x: -16 })}
          animate={{ opacity: 1, x: 0 }}
          transition={trans(0.55, 0.1)}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-0.5 bg-primary flex-shrink-0" />
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest leading-tight">
            Kiambu Road · Fourways Junction · Nairobi
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={init({ opacity: 0, y: 28 })}
          animate={{ opacity: 1, y: 0 }}
          transition={trans(0.7, 0.2)}
          className="text-white font-black text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4 max-w-3xl text-balance"
        >
          {company.tagline.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="text-primary">
            {company.tagline.split(' ').slice(2).join(' ')}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={init({ opacity: 0, y: 20 })}
          animate={{ opacity: 1, y: 0 }}
          transition={trans(0.65, 0.35)}
          className="text-white/70 text-base sm:text-xl mb-8 md:mb-10 max-w-xl leading-relaxed"
        >
          Quality Japanese imported vehicles — hatchbacks, sedans, SUVs, and wagons.
          Asset financing available on every car in our showroom.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={init({ opacity: 0, y: 16 })}
          animate={{ opacity: 1, y: 0 }}
          transition={trans(0.6, 0.5)}
          className="flex flex-wrap gap-5 sm:gap-8 mb-8 md:mb-12"
        >
          {[
            { value: '54K+', label: 'Facebook Followers' },
            { value: '90%', label: 'Recommendation Rate' },
            { value: '10+', label: 'Years Serving Kenya' },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-primary font-black text-2xl">{value}</span>
              <span className="text-white/60 text-sm leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={init({ opacity: 0, y: 16 })}
          animate={{ opacity: 1, y: 0 }}
          transition={trans(0.6, 0.65)}
          className="w-full"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  )
}
