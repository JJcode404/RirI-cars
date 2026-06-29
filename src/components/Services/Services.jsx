import {
  MdDirectionsCar,
  MdAccountBalance,
  MdVerifiedUser,
  MdSwapHoriz,
  MdBuild,
  MdLocalShipping,
  MdFlightTakeoff,
  MdSupportAgent,
  MdArrowForward,
} from 'react-icons/md'
import { services } from '../../data/services'

const iconMap = {
  MdDirectionsCar,
  MdAccountBalance,
  MdVerifiedUser,
  MdSwapHoriz,
  MdBuild,
  MdLocalShipping,
  MdFlightTakeoff,
  MdSupportAgent,
}

export default function Services() {
  return (
    <section id="services" className="section-gap bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="section-title mt-1 mx-auto">Our Services</h2>
          <div className="divider-red mx-auto" />
          <p className="section-subtitle mx-auto text-center mt-3 max-w-2xl">
            From direct Japan imports and asset financing to trade-ins and after-sales
            support — Riri Cars is your complete automotive partner on Kiambu Road.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="group p-6 border border-brand-border rounded bg-brand-bg hover:bg-white hover:border-primary hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-subtle border border-primary/20 rounded flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  {Icon && (
                    <Icon className="text-primary group-hover:text-white text-2xl transition-colors duration-300" />
                  )}
                </div>
                <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <MdArrowForward />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
