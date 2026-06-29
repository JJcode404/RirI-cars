import { useState } from 'react'
import { MdEmail, MdArrowForward, MdCheckCircle } from 'react-icons/md'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(11,26,49,0.96) 0%, rgba(13,13,13,0.98) 100%),
          url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=60&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-shine" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-shine" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Stay Updated
            </span>
            <h2 className="text-white font-black text-3xl lg:text-4xl mt-2 mb-4 leading-tight">
              Get the Latest Deals
              <br />
              <span className="text-primary">Straight to Your Inbox</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Subscribe to the RIRI CARS newsletter for exclusive deals, new
              arrivals, buying guides, and automotive tips delivered weekly.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Exclusive subscriber-only offers',
                'New arrivals before they go public',
                'Expert automotive tips & guides',
                'No spam — unsubscribe anytime',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <MdCheckCircle className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Email form */}
            {submitted ? (
              <div className="flex items-center gap-3 bg-success/10 border border-success/30 rounded px-5 py-4">
                <MdCheckCircle className="text-success text-xl" />
                <p className="text-white text-sm font-medium">
                  You're subscribed! Watch your inbox for exclusive deals.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted text-lg" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 pl-10 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <button type="submit" className="btn-primary flex-shrink-0 justify-center">
                  Subscribe
                  <MdArrowForward />
                </button>
              </form>
            )}

            <p className="text-white/30 text-xs mt-3">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>

          {/* Car image */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80&auto=format&fit=crop"
                alt="Featured vehicle"
                className="w-full max-w-md rounded shadow-red-glow"
                style={{ filter: 'drop-shadow(0 0 40px rgba(204,0,0,0.3))' }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
