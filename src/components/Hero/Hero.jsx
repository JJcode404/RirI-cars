import SearchBar from "../SearchBar/SearchBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-12 pt-32"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(11,26,49,0.75) 50%, rgba(0,0,0,0.60) 100%),
          url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=85&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-shine" />

      <div className="max-w-container mx-auto px-6 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-primary" />
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Kenya's Premier Car Dealership
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4 max-w-3xl">
          Find Your
          <br />
          <span className="text-primary">Perfect Drive</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed">
          Over 500 new and certified pre-owned vehicles. Flexible financing,
          fair trade-ins, and expert service — all under one roof.
        </p>

        {/* Quick stats row */}
        <div className="flex flex-wrap gap-8 mb-12">
          {[
            { value: "500+", label: "Vehicles in Stock" },
            { value: "50+", label: "Premium Brands" },
            { value: "10K+", label: "Happy Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-primary font-black text-2xl">{value}</span>
              <span className="text-white/60 text-sm leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="w-full">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
