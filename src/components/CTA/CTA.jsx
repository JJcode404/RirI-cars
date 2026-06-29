import { MdArrowForward, MdPhone, MdWhatsapp } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="bg-red-shine py-16">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-white font-black text-3xl lg:text-4xl leading-tight mb-2">
              Ready to Find Your Dream Car?
            </h2>
            <p className="text-white/80 text-base max-w-xl">
              Browse 500+ vehicles or speak to our expert team right now. We're
              open Mon – Sat, 8 AM to 6 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-brand-bg font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-all duration-200 shadow"
            >
              Browse Inventory
              <MdArrowForward />
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-dark/40 hover:bg-dark/60 border border-white/30 text-white font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-all duration-200"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
