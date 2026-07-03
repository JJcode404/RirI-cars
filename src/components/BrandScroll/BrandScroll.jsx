import {
  SiToyota,
  SiHonda,
  SiNissan,
  SiSubaru,
  SiMazda,
  SiMitsubishi,
  SiSuzuki,
} from 'react-icons/si'

const brands = [
  { name: 'Toyota',     Icon: SiToyota,     color: '#EB0A1E' },
  { name: 'Honda',      Icon: SiHonda,      color: '#E40521' },
  { name: 'Nissan',     Icon: SiNissan,     color: '#C3002F' },
  { name: 'Subaru',     Icon: SiSubaru,     color: '#003399' },
  { name: 'Mazda',      Icon: SiMazda,      color: '#103475' },
  { name: 'Mitsubishi', Icon: SiMitsubishi, color: '#ED0000' },
  { name: 'Suzuki',     Icon: SiSuzuki,     color: '#E31F26' },
  { name: 'Isuzu',      Icon: null,         color: '#003087' },
]

// Tripled so the strip stays full at any viewport width
const track = [...brands, ...brands, ...brands]

export default function BrandScroll() {
  return (
    <section className="bg-white border-y border-brand-border py-7 overflow-hidden">
      <style>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .brand-track {
          animation: brand-scroll 22s linear infinite;
          will-change: transform;
        }
        .brand-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Label */}
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted/60 mb-6 px-4">
        Brands We Source &amp; Stock
      </p>

      {/* Scrolling strip */}
      <div className="flex select-none">
        <div className="brand-track flex items-center gap-8 md:gap-16 flex-shrink-0 px-4 md:px-8">
          {track.map(({ name, Icon, color }, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2 cursor-default"
              style={{ minWidth: '72px' }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => { e.currentTarget.style.color = color }}
                onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}
              >
                {Icon ? (
                  <Icon size={36} />
                ) : (
                  <span
                    className="font-black text-sm tracking-tight leading-none"
                    style={{ fontSize: '13px', letterSpacing: '0.05em' }}
                  >
                    {name.toUpperCase()}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted/50 group-hover:text-muted transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
