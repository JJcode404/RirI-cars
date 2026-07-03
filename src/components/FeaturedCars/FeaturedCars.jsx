import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForward } from 'react-icons/md'
import { featuredCars } from '../../data/cars'
import CarCard from './CarCard'

const tabs = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'hatch', label: 'Hatchbacks', bodyType: 'Hatchback' },
  { key: 'sedan', label: 'Sedans', bodyType: 'Sedan' },
  { key: 'suv', label: 'SUVs', bodyType: 'SUV' },
  { key: 'hybrid', label: 'Hybrid', fuel: 'Hybrid' },
]

export default function FeaturedCars() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = featuredCars.filter((c) => {
    if (activeTab === 'all') return true
    const tab = tabs.find((t) => t.key === activeTab)
    if (!tab) return true
    if (tab.bodyType) return c.bodyType === tab.bodyType
    if (tab.fuel) return c.fuel.toLowerCase().includes('hybrid')
    return true
  })

  return (
    <section id="featured" className="section-gap bg-brand-bg">
      <div className="container-main">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Current Stock
            </span>
            <h2 className="section-title mt-1">Available Vehicles</h2>
            <div className="divider-red" />
            <p className="section-subtitle mt-3">
              Handpicked Japanese domestic market imports at market-leading prices.
              Asset financing available on every vehicle.
            </p>
          </div>
          <Link
            to="/cars"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors flex-shrink-0"
          >
            View Full Inventory <MdArrowForward />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide mb-8">
          <div className="flex gap-1 bg-white border border-brand-border rounded p-1 w-max min-w-full">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded whitespace-nowrap transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted hover:text-dark'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted">
            <p className="text-lg font-semibold mb-2">No vehicles in this category right now.</p>
            <p className="text-sm">Contact us — we can source any vehicle directly from Japan.</p>
            <Link to="/contact" className="btn-primary mt-4 inline-flex">
              Contact Us <MdArrowForward />
            </Link>
          </div>
        )}

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/cars" className="btn-outline-primary">
            View Full Inventory
            <MdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  )
}
