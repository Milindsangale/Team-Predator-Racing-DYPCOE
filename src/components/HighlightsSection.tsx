import { Car, Settings, Trophy, Users } from "lucide-react";

const highlights = [
  { icon: Car, label: "Formula Student / BAJA Racing" },
  { icon: Settings, label: "CAD, ANSYS, CFD Experts" },
  { icon: Trophy, label: "Award-Winning Performance" },
  { icon: Users, label: "Strong Engineering Team" },
];

const HighlightsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
        What We <span className="text-gradient">Do</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Team Predator Racing represents innovation, teamwork, and engineering excellence. Our goal is to push boundaries in motorsports through advanced design, simulation, and manufacturing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="surface-gradient border border-border p-6 text-center hover:border-glow transition-all duration-300 group"
          >
            <h.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <p className="font-display text-sm uppercase tracking-wider text-foreground">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
