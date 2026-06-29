import { useState, useEffect } from 'react'
import {
  MdPhone,
  MdEmail,
  MdAccessTime,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from 'react-icons/md'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Inventory',
    href: '#featured',
    children: [
      { label: 'New Cars', href: '#featured' },
      { label: 'Used Cars', href: '#featured' },
      { label: 'Electric & Hybrid', href: '#featured' },
      { label: 'Luxury Vehicles', href: '#featured' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#footer' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Info Bar */}
      <div className="bg-dark text-white text-xs hidden md:block">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MdPhone className="text-primary text-sm" />
              <span>+254 700 000 000</span>
            </a>
            <a
              href="mailto:info@riricars.co.ke"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MdEmail className="text-primary text-sm" />
              <span>info@riricars.co.ke</span>
            </a>
            <span className="flex items-center gap-1.5 text-muted-light">
              <MdAccessTime className="text-primary text-sm" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: FaFacebookF, href: '#' },
              { icon: FaInstagram, href: '#' },
              { icon: FaTwitter, href: '#' },
              { icon: FaYoutube, href: '#' },
              { icon: FaWhatsapp, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-muted-light hover:text-accent transition-colors"
                aria-label="Social link"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-dark-nav transition-all duration-300 ${
          scrolled ? 'shadow-nav' : ''
        }`}
      >
        <div className="max-w-container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-2xl tracking-tight font-outfit">
                RIRI
              </span>
              <span className="text-primary font-black text-2xl tracking-tight font-outfit -mt-1">
                CARS
              </span>
            </div>
            <div className="w-px h-10 bg-white/20 mx-1 hidden sm:block" />
            <span className="text-white/60 text-xs font-medium hidden sm:block leading-tight">
              Premium<br />Automotive
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded transition-colors"
                >
                  {link.label}
                  {link.children && (
                    <MdKeyboardArrowDown
                      className={`text-base transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded shadow-card-hover py-1 z-50 animate-fade-in">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-brand-low hover:text-primary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <MdPhone className="text-primary" />
              Call Us
            </a>
            <a href="#featured" className="btn-primary text-xs py-2.5 px-5">
              Browse Cars
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-dark border-t border-white/10 animate-slide-up">
            <div className="max-w-container mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded text-sm font-medium transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block text-white/60 hover:text-white px-3 py-2 rounded text-xs transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a href="#featured" className="btn-primary justify-center text-xs">
                  Browse Cars
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
