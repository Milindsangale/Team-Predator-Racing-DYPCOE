import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Cars Built" },
  { value: 12, suffix: "+", label: "Competitions" },
  { value: 8, suffix: "", label: "Awards Won" },
  { value: 50, suffix: "+", label: "Team Members" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl md:text-5xl font-bold text-primary">
        {count}{suffix}
      </span>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-16 border-y border-border bg-surface">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
