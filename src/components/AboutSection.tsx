import workshopImg from "@/assets/workshop.jpg";

const teamMembers = [
  { name: "Milind Sangere", role: "Team Captain", desc: "Leads the team with vision and strategic decision-making across all departments." },
  { name: "Priya Deshmukh", role: "Vice Captain", desc: "Coordinates team operations and ensures smooth execution of all project milestones." },
  { name: "Rahul Patil", role: "Design Head", desc: "Oversees vehicle design and CAD modeling, ensuring aerodynamic efficiency." },
  { name: "Sneha Kulkarni", role: "Analysis Engineer", desc: "Conducts FEA and CFD simulations to optimize vehicle performance." },
  { name: "Amit Joshi", role: "Manufacturing Head", desc: "Manages fabrication processes and workshop operations for precision builds." },
  { name: "Neha Sharma", role: "Electronics Lead", desc: "Designs and integrates electronic systems including telemetry and sensors." },
  { name: "Vikram Singh", role: "Marketing Head", desc: "Handles branding, sponsorship outreach, and team communications." },
  { name: "Ananya Rao", role: "Finance Head", desc: "Manages budgets, funding proposals, and financial planning for the team." },
  { name: "Kunal Mehta", role: "Testing Engineer", desc: "Plans and executes vehicle testing protocols for track readiness." },
  { name: "Milind Sangere", role: "Software & Design Engineer", desc: "Responsible for backend systems, data analysis, and vehicle simulation." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-surface">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Built for Speed.<br /><span className="text-gradient">Driven by Passion.</span>
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Team Predator Racing is a group of enthusiastic engineering students committed to building high-performance racing machines. Our team focuses on design, analysis, fabrication, and testing to achieve excellence in national-level competitions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe in innovation, teamwork, and continuous learning, making us one of the most dedicated racing teams in our institute.
          </p>
        </div>
        <div className="relative">
          <img src={workshopImg} alt="Team working in workshop" className="w-full object-cover border border-border" />
          <div className="absolute inset-0 border border-primary/20" />
        </div>
      </div>

      <div>
        <p className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-3 text-center">Our Team</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the <span className="text-gradient">Engineers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="surface-gradient border border-border p-6 hover:border-glow hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center font-display text-xl text-primary">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground text-center">{member.name}</h3>
              <p className="font-display text-xs text-primary text-center uppercase tracking-wider mt-1">{member.role}</p>
              <p className="text-muted-foreground text-sm text-center mt-3 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
