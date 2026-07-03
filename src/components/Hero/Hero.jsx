import SearchBar from "../SearchBar/SearchBar";
import { company } from "../../data/company";
import heroBg from "../../assets/riri banner/riri-showroom.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-8 md:pb-12 pt-28 md:pt-32"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(11,26,49,0.80) 50%, rgba(0,0,0,0.65) 100%),
          url('${heroBg}')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-shine" />

      <div className="max-w-container mx-auto px-6 w-full">
        {/* Eyebrow — verified tagline from Facebook */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-primary flex-shrink-0" />
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest leading-tight">
            Kiambu Road · Fourways Junction · Nairobi
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white font-black text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4 max-w-3xl">
          {company.tagline.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-primary">
            {company.tagline.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-white/70 text-base sm:text-xl mb-8 md:mb-10 max-w-xl leading-relaxed">
          Quality Japanese imported vehicles — hatchbacks, sedans, SUVs, and
          wagons. Asset financing available on every car in our showroom.
        </p>

        {/* Quick stats — sourced from Facebook page data */}
        <div className="flex flex-wrap gap-5 sm:gap-8 mb-8 md:mb-12">
          {[
            { value: "54K+", label: "Facebook Followers" },
            { value: "90%", label: "Recommendation Rate" },
            { value: "10+", label: "Years Serving Kenya" },
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
