import { useState } from 'react'
import { MdSearch, MdKeyboardArrowDown } from 'react-icons/md'
import { makes, models, years, priceRanges, bodyTypes } from '../../data/cars'

const SelectField = ({ label, options, value, onChange }) => (
  <div className="relative flex-1 min-w-[140px]">
    <label className="block text-xs font-bold text-muted-dark uppercase tracking-wider mb-1.5">
      {label}
    </label>
    <div className="relative">
      <select
        className="select-field pr-8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All {label}s</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none text-lg" />
    </div>
  </div>
)

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('all')
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    bodyType: '',
  })

  const setFilter = (key) => (val) => setFilters((f) => ({ ...f, [key]: val }))

  return (
    <div className="bg-white rounded shadow-card-hover border border-brand-border overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-brand-border">
        {[
          { key: 'all', label: 'All Vehicles' },
          { key: 'new', label: 'New Cars' },
          { key: 'used', label: 'Used Cars' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 sm:flex-none px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 ${
              activeTab === key
                ? 'border-primary text-primary bg-primary-subtle'
                : 'border-transparent text-muted hover:text-dark hover:border-brand-border'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <SelectField
            label="Make"
            options={makes}
            value={filters.make}
            onChange={setFilter('make')}
          />
          <SelectField
            label="Model"
            options={models}
            value={filters.model}
            onChange={setFilter('model')}
          />
          <SelectField
            label="Year"
            options={years}
            value={filters.year}
            onChange={setFilter('year')}
          />
          <SelectField
            label="Price Range"
            options={priceRanges}
            value={filters.price}
            onChange={setFilter('price')}
          />
          <SelectField
            label="Body Type"
            options={bodyTypes}
            value={filters.bodyType}
            onChange={setFilter('bodyType')}
          />
          <div className="flex-shrink-0">
            <label className="block text-xs font-bold text-muted-dark uppercase tracking-wider mb-1.5 opacity-0 select-none">
              Search
            </label>
            <button className="btn-primary h-[46px] px-8 gap-2">
              <MdSearch size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
