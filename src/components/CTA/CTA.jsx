import { Link } from 'react-router-dom'
import { MdArrowForward, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../../data/company'

export default function CTA() {
  return (
    <section className="bg-red-shine py-16">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-white font-black text-3xl lg:text-4xl leading-tight mb-2">
              Ready to Drive Your Next Car?
            </h2>
            <p className="text-white/80 text-base max-w-xl mb-2">
              Visit us at Kiambu Road, Fourways Junction — or contact us right now.
              Asset financing available on every vehicle.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2 justify-center md:justify-start">
              <MdLocationOn />
              {company.location.street}, {company.location.area}
              {' · '}
              <a
                href={company.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Get Directions
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/cars"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-brand-bg font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-all duration-200 shadow"
            >
              Browse Inventory <MdArrowForward />
            </Link>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded transition-all duration-200"
            >
              <FaWhatsapp />
              WhatsApp: {company.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
