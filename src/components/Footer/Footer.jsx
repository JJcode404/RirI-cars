import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdArrowForward,
  MdAccessTime,
} from 'react-icons/md'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'New Cars', href: '#featured' },
  { label: 'Used Cars', href: '#featured' },
  { label: 'Car Financing', href: '#services' },
  { label: 'Trade-In Valuation', href: '#services' },
  { label: 'Service Centre', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

const serviceLinks = [
  'Car Finance',
  'Insurance',
  'Test Drive',
  'Home Delivery',
  'Car Care & Repair',
  'Vehicle Inspection',
  'Fleet Management',
  'Roadside Assistance',
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter/X' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark">
      {/* Top accent */}
      <div className="w-full h-1 bg-red-shine" />

      <div className="container-main py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-2xl tracking-tight">RIRI</span>
                <span className="text-primary font-black text-2xl tracking-tight -mt-1">CARS</span>
              </div>
              <div className="w-px h-10 bg-white/20 mx-1" />
              <span className="text-white/40 text-xs font-medium leading-tight">
                Premium<br />Automotive
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Kenya's most trusted car dealership since 2010. We connect drivers
              with their perfect vehicle through exceptional service, transparency,
              and expertise.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
              Quick Links
            </h3>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group"
                  >
                    <MdArrowForward className="text-primary text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
              Our Services
            </h3>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group"
                  >
                    <MdArrowForward className="text-primary text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-1">
              Contact Us
            </h3>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-primary text-lg flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Riri Cars Complex, Ngong Road,<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <MdPhone className="text-primary text-lg flex-shrink-0" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@riricars.co.ke"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <MdEmail className="text-primary text-lg flex-shrink-0" />
                  info@riricars.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdAccessTime className="text-primary text-lg flex-shrink-0 mt-0.5" />
                <div className="text-white/50 text-sm space-y-1">
                  <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} RIRI CARS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
