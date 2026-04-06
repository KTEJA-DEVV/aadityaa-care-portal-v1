import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-sun.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Desktop/Tablet: logo + name/tagline on left */}
        <a href="#home" className="hidden md:flex items-center gap-3">
          <img src={logo} alt="Aadityaa Hospital Logo" className="h-16 w-auto" />
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl font-extrabold tracking-wide"
              style={{ color: "#D4A017", fontFamily: "'Times New Roman', Times, serif" }}
            >
              AADITYAA HOSPITAL
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex-1 h-[2px]" style={{ backgroundColor: "#2D1054" }} />
              <span
                className="text-[10px] font-semibold tracking-[0.15em] whitespace-nowrap"
                style={{ color: "#2D1054", fontFamily: "'Times New Roman', Times, serif" }}
              >
                HEALING WITH TRUST AND EXPERTISE
              </span>
              <span className="flex-1 h-[2px]" style={{ backgroundColor: "#2D1054" }} />
            </div>
          </div>
        </a>

        {/* Mobile: name/tagline on left */}
        <a href="#home" className="md:hidden flex flex-col leading-tight">
          <span
            className="text-base font-extrabold tracking-wide"
            style={{ color: "#D4A017", fontFamily: "'Times New Roman', Times, serif" }}
          >
            AADITYAA HOSPITAL
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="flex-1 h-[1.5px]" style={{ backgroundColor: "#2D1054" }} />
            <span
              className="text-[7px] font-semibold tracking-[0.12em] whitespace-nowrap"
              style={{ color: "#2D1054", fontFamily: "'Times New Roman', Times, serif" }}
            >
              HEALING WITH TRUST AND EXPERTISE
            </span>
            <span className="flex-1 h-[1.5px]" style={{ backgroundColor: "#2D1054" }} />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:9381126231">
            <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-accent">
              <Phone className="w-4 h-4" /> Call Now
            </Button>
          </a>
          <a href="#appointment">
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Book Appointment
            </Button>
          </a>
        </div>

        {/* Mobile: logo + hamburger on right */}
        <div className="md:hidden flex items-center gap-2">
          <img src={logo} alt="Aadityaa Hospital Logo" className="h-10 w-auto" />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container flex flex-col gap-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gradient-hero text-primary-foreground">Book Appointment</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
