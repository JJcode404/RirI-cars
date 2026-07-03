import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MdPhone,
  MdEmail,
  MdAccessTime,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { company } from '../../data/company'
import logo from '../../assets/logo/RiricarsLogo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Inventory',
    href: '/cars',
    children: [
      { label: 'All Vehicles', href: '/cars' },
      { label: 'Hatchbacks', href: '/cars?bodyType=Hatchback' },
      { label: 'Sedans & Saloons', href: '/cars?bodyType=Sedan' },
      { label: 'SUVs & 4x4s', href: '/cars?bodyType=SUV' },
      { label: 'Station Wagons', href: '/cars?bodyType=Station%20Wagon' },
      { label: 'Hybrid Cars', href: '/cars?fuel=Hybrid' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Recently Sold', href: '/#recently-sold' },
  { label: 'Contact', href: '/contact' },
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
              href={`tel:${company.contact.phone1Bare}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MdPhone className="text-primary text-sm" />
              <span>{company.contact.phone1}</span>
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MdEmail className="text-primary text-sm" />
              <span>{company.contact.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-muted-light">
              <MdAccessTime className="text-primary text-sm" />
              <span>{company.hoursShort}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-light hover:text-accent transition-colors"
            >
              <FaFacebookF size={13} />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-light hover:text-accent transition-colors"
            >
              <FaInstagram size={13} />
            </a>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-light hover:text-accent transition-colors"
            >
              <FaWhatsapp size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-dark-nav transition-all duration-300 ${scrolled ? 'shadow-nav' : ''}`}>
        <div className="max-w-container mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="RIRI CARS" className="h-14 w-auto object-contain" />
            <div className="w-px h-14 bg-white/20 mx-1 hidden sm:block" />
            <span className="text-white/50 text-xs font-medium hidden sm:block leading-tight">
              Where Excellence<br />Meets Affordability
            </span>
          </a>

          {/* Desktop Nav */}
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
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <FaWhatsapp className="text-green-400" />
              WhatsApp
            </a>
            <a href="/cars" className="btn-primary text-xs py-2.5 px-5">
              View Cars
            </a>
          </div>

          {/* Mobile toggle */}
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
                          className="block text-white/50 hover:text-white px-3 py-2 rounded text-xs transition-colors"
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
                <a
                  href={`tel:${company.contact.phone1Bare}`}
                  className="flex items-center justify-center gap-2 border border-white/20 text-white text-sm py-2.5 rounded"
                >
                  <MdPhone /> {company.contact.phone1}
                </a>
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm py-2.5 rounded font-semibold"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a href="/cars" className="btn-primary justify-center text-xs">
                  View Cars
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
