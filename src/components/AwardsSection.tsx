import { Award, Medal, Star, Trophy } from "lucide-react";
import trophyImg from "@/assets/trophy.jpg";

const awards = [
  { icon: Award, title: "Best Design Award – 2025", desc: "Recognized for outstanding vehicle design and engineering innovation." },
  { icon: Medal, title: "Runner-Up – National Racing Challenge", desc: "Secured second position competing against 50+ teams nationwide." },
  { icon: Trophy, title: "Innovation Award – Engineering Fest", desc: "Awarded for pioneering use of composite materials in chassis design." },
  { icon: Star, title: "Best Teamwork Award", desc: "Honored for exceptional collaboration and project management." },
];

const AwardsSection = () => (
  <section id="awards" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-3">Recognition</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Our hard work and dedication have been recognized at various competitions.
          </p>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="surface-gradient border border-border p-5 flex items-start gap-4 hover:border-glow transition-all duration-300"
              >
                <award.icon className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{award.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img src={trophyImg} alt="Trophy on podium" className="w-full object-cover border border-border" />
        </div>
      </div>
    </div>
  </section>
);

export default AwardsSection;
