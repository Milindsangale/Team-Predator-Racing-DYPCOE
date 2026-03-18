import { useEffect, useState } from "react";
import teamGroup from "@/assets/team-group.png";
import carTrophies from "@/assets/car-trophies.png";
import champions from "@/assets/champions.png";

const slides = [
  { src: teamGroup, alt: "Team Predators Racing group photo at competition" },
  { src: carTrophies, alt: "E19 car with trophies - 1st Runner Up SAE India 2026" },
  { src: champions, alt: "Baja SAE India 2024 Champions podium" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Team Predator Racing
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Engineering Speed.<br />
          <span className="text-gradient">Driving Innovation.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          We are a passionate team of engineers dedicated to designing, building, and racing high-performance vehicles.
        </p>
        <div className="flex gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a href="/about" className="bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider px-8 py-3 hover:glow-red transition-all duration-300">
            Discover More
          </a>
          <a href="/contact" className="border border-border text-foreground font-display text-sm uppercase tracking-wider px-8 py-3 hover:border-primary transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-muted-foreground rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
