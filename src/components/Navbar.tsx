import logo from "@/assets/logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Team Predators Racing" className="h-10" />
      </a>
      <div className="hidden md:flex items-center gap-8">
        {["Home", "About", "Awards", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
            className="font-display text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
