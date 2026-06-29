import { useState } from 'react'
import { MdEmail, MdArrowForward, MdCheckCircle, MdPhone } from 'react-icons/md'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { company } from '../../data/company'

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
      <div className="absolute top-0 left-0 w-full h-1 bg-red-shine" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-shine" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text + Form */}
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Stay in the Loop
            </span>
            <h2 className="text-white font-black text-3xl lg:text-4xl mt-2 mb-4 leading-tight">
              Get New Arrivals &<br />
              <span className="text-primary">Exclusive Deals First</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Subscribe and be the first to know when new Japanese imports land at our showroom
              on Kiambu Road. Weekly deals, buying guides, and tips — straight to your inbox.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'New arrivals before they go public',
                'Flash sale alerts and exclusive subscriber discounts',
                'Hybrid car guides and import tips',
                'No spam — unsubscribe anytime',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <MdCheckCircle className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {submitted ? (
              <div className="flex items-center gap-3 bg-success/10 border border-success/30 rounded px-5 py-4">
                <MdCheckCircle className="text-success text-xl" />
                <p className="text-white text-sm font-medium">
                  You're subscribed! Watch your inbox for the latest Riri Cars deals.
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
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 pl-10 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <button type="submit" className="btn-primary flex-shrink-0 justify-center">
                  Subscribe <MdArrowForward />
                </button>
              </form>
            )}
            <p className="text-white/30 text-xs mt-3">We respect your privacy.</p>
          </div>

          {/* Contact quick-access panel */}
          <div className="hidden lg:block">
            <div className="bg-white/5 border border-white/10 rounded p-8 space-y-5">
              <h3 className="text-white font-bold text-lg mb-4">Contact Riri Cars Directly</h3>

              <a
                href={`tel:${company.contact.phone1Bare}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded flex items-center justify-center group-hover:bg-primary transition-all">
                  <MdPhone className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Call us</p>
                  <p className="text-white font-semibold text-sm">{company.contact.phone1}</p>
                </div>
              </a>

              <a
                href={`tel:${company.contact.phone2Bare}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded flex items-center justify-center group-hover:bg-primary transition-all">
                  <MdPhone className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Call us</p>
                  <p className="text-white font-semibold text-sm">{company.contact.phone2}</p>
                </div>
              </a>

              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-green-600/20 border border-green-600/30 rounded flex items-center justify-center group-hover:bg-green-600 transition-all">
                  <FaWhatsapp className="text-green-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">WhatsApp</p>
                  <p className="text-white font-semibold text-sm">{company.contact.whatsapp}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded flex items-center justify-center group-hover:bg-primary transition-all">
                  <MdEmail className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Email</p>
                  <p className="text-white font-semibold text-sm">{company.contact.email}</p>
                </div>
              </a>

              <div className="pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs mb-3">Follow us</p>
                <div className="flex gap-3">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded flex items-center justify-center text-white/60 hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded flex items-center justify-center text-white/60 hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={14} />
                  </a>
                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/5 hover:bg-green-600 border border-white/10 hover:border-green-600 rounded flex items-center justify-center text-white/60 hover:text-white transition-all"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
