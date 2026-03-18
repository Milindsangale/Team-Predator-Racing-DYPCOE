import heroImg from "@/assets/hero-racing.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Racing car speeding on track"
        className="absolute inset-0 w-full h-full object-cover"
      />
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
          <a href="#about" className="bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider px-8 py-3 hover:glow-red transition-all duration-300">
            Discover More
          </a>
          <a href="#contact" className="border border-border text-foreground font-display text-sm uppercase tracking-wider px-8 py-3 hover:border-primary transition-all duration-300">
            Contact Us
          </a>
        </div>
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
