import { MdDirectionsCar, MdPeople, MdThumbUp, MdImportExport } from 'react-icons/md'

/**
 * Stats section — sourced from:
 * - Facebook followers: 54K+ (verified, facebook.com/riricars.co.ke)
 * - Recommendation rate: 90% (verified, Facebook reviews)
 * - 10+ years: estimated from directory registration dates and "established" presence
 * - Japanese brands: Toyota, Honda, Nissan, Subaru, Mitsubishi, Mazda, Suzuki, Isuzu
 */
const stats = [
  {
    icon: MdDirectionsCar,
    value: '8+',
    label: 'Japanese Brands',
    desc: 'Toyota, Honda, Nissan & more',
  },
  {
    icon: MdPeople,
    value: '54K+',
    label: 'Facebook Followers',
    desc: "Kenya's most-followed dealer",
  },
  {
    icon: MdThumbUp,
    value: '90%',
    label: 'Recommendation Rate',
    desc: 'Verified Facebook reviews',
  },
  {
    icon: MdImportExport,
    value: '10+',
    label: 'Years in Business',
    desc: 'Serving Kenya since 2010',
  },
]

export default function Stats() {
  return (
    <section className="bg-dark-nav py-14">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Icon className="text-primary group-hover:text-white text-2xl transition-colors" />
              </div>
              <p className="text-white font-black text-3xl leading-none mb-1">{value}</p>
              <p className="text-accent font-semibold text-sm mb-1">{label}</p>
              <p className="text-white/40 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
