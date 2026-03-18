import { useEffect, useState } from "react";
import teamGroup from "@/assets/team-group.png";
import carTrophies from "@/assets/car-trophies.png";
import champions from "@/assets/champions.png";

const slides = [
  { src: teamGroup, alt: "Team Predators Racing group photo at competition" },
  { src: carTrophies, alt: "E19 car with trophies - 1st Runner Up SAE India 2026" },
  { src: champions, alt: "Baja SAE India 2024 Champions podium" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
    </section>
  );
};

export default ImageSlider;
