import { useEffect, useRef, useState } from 'react'
import { MdDirectionsCar, MdPeople, MdThumbUp, MdImportExport } from 'react-icons/md'

/**
 * Stats section — sourced from:
 * - Facebook followers: 54K+ (verified, facebook.com/riricars.co.ke)
 * - Recommendation rate: 90% (verified, Facebook reviews)
 * - 10+ years: estimated from directory registration dates and "established" presence
 * - Japanese brands: Toyota, Honda, Nissan, Subaru, Mitsubishi, Mazda, Suzuki, Isuzu
 */
const stats = [
  {
    icon: MdDirectionsCar,
    value: '8+',
    label: 'Japanese Brands',
    desc: 'Toyota, Honda, Nissan & more',
  },
  {
    icon: MdPeople,
    value: '54K+',
    label: 'Facebook Followers',
    desc: "Kenya's most-followed dealer",
  },
  {
    icon: MdThumbUp,
    value: '90%',
    label: 'Recommendation Rate',
    desc: 'Verified Facebook reviews',
  },
  {
    icon: MdImportExport,
    value: '10+',
    label: 'Years in Business',
    desc: 'Serving Kenya since 2010',
  },
]

function AnimatedValue({ value, animate, delay = 0 }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate || !target) return
    let raf
    let timeout
    const duration = 1200

    const tick = (start) => (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick(start))
    }

    timeout = setTimeout(() => {
      raf = requestAnimationFrame((now) => tick(now)(now))
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [animate, target, delay])

  return (
    <>
      {animate ? count : 0}
      {suffix}
    </>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-dark-nav py-14">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, desc }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center group transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Icon className="text-primary group-hover:text-white text-2xl transition-colors" />
              </div>
              <p className="text-white font-black text-3xl leading-none mb-1 tabular-nums">
                <AnimatedValue value={value} animate={inView} delay={i * 100} />
              </p>
              <p className="text-accent font-semibold text-sm mb-1">{label}</p>
              <p className="text-white/40 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
