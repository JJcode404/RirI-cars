import { useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import { featuredCars } from '../../data/cars'
import CarCard from './CarCard'

const tabs = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'New', label: 'New Cars' },
  { key: 'Used', label: 'Used Cars' },
]

export default function FeaturedCars() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all'
      ? featuredCars
      : featuredCars.filter((c) => c.status === activeTab)

  return (
    <section id="featured" className="section-gap bg-brand-bg">
      <div className="container-main">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Our Inventory
            </span>
            <h2 className="section-title mt-1">Featured Vehicles</h2>
            <div className="divider-red" />
            <p className="section-subtitle mt-3">
              Hand-picked selection of our finest new and certified pre-owned
              vehicles available now.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors flex-shrink-0"
          >
            View All Inventory
            <MdArrowForward />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white border border-brand-border rounded p-1 w-fit mb-8">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 text-sm font-semibold rounded transition-all duration-200 ${
                activeTab === key
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-dark'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="flex justify-center mt-10 sm:hidden">
          <a href="#" className="btn-outline-primary">
            View All Inventory
            <MdArrowForward />
          </a>
        </div>

        {/* Desktop View All */}
        <div className="hidden sm:flex justify-center mt-12">
          <a href="#" className="btn-outline-primary">
            View All {filtered.length > 4 ? 'Vehicles' : 'Inventory'}
            <MdArrowForward />
          </a>
        </div>
      </div>
    </section>
  )
}
