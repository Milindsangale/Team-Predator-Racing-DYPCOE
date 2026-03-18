import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-3 text-center">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-gradient">Us</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-foreground">Reach Out</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">DY Patil College of Engineering, Akurdi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">teampredator@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-input border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider py-3 hover:glow-red transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
