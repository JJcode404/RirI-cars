import { MdFavorite, MdFavoriteBorder, MdSpeed, MdLocalGasStation, MdSettings, MdVerified } from 'react-icons/md'
import { useState } from 'react'

const formatPrice = (price) =>
  `KSh ${price.toLocaleString('en-KE')}`

export default function CarCard({ car }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="card-base group rounded overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-brand-low flex-shrink-0">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Condition badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {car.status === 'New' ? (
            <span className="badge-new">{car.status}</span>
          ) : (
            <span className="badge-used">{car.status}</span>
          )}
          {car.condition && (
            <span className="bg-dark-nav/90 text-white/80 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <MdVerified size={10} className="text-accent" />
              {car.condition}
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
          aria-label="Toggle wishlist"
        >
          {liked ? (
            <MdFavorite className="text-primary text-base" />
          ) : (
            <MdFavoriteBorder className="text-muted text-base" />
          )}
        </button>
        {/* Price on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-bold text-lg">{formatPrice(car.price)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-dark text-base leading-tight mb-0.5">
          {car.year} {car.make} {car.model}
        </h3>
        <p className="text-muted text-xs mb-1 font-medium">{car.trim}</p>
        <p className="text-muted-light text-xs mb-3">{car.exteriorColor}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center gap-1 bg-brand-low rounded p-2">
            <MdSpeed className="text-primary text-base" />
            <span className="text-xs text-muted text-center leading-tight font-medium">
              {car.mileage === 0 ? '0 km' : `${car.mileage.toLocaleString()} km`}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-brand-low rounded p-2">
            <MdLocalGasStation className="text-primary text-base" />
            <span className="text-xs text-muted text-center leading-tight font-medium">
              {car.fuel}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-brand-low rounded p-2">
            <MdSettings className="text-primary text-base" />
            <span className="text-xs text-muted text-center leading-tight font-medium">
              {car.transmission.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Engine + Drive */}
        <p className="text-muted-light text-xs mb-3">
          {car.engine} · {car.drive}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-border">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-0.5">Price</p>
            <p className="price-tag">{formatPrice(car.price)}</p>
          </div>
          <a
            href="#footer"
            className="btn-primary text-xs py-2 px-4"
            aria-label={`Enquire about ${car.year} ${car.make} ${car.model}`}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  )
}
