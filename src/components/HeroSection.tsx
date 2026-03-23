import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 animate-fade-in-up">
            Healing with Trust and Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Expert Women's Healthcare You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive maternity, gynecology, and women's health services delivered with compassion by Dr. Sreelatha Gunda (MBBS, DGO).
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#appointment">
              <Button size="lg" className="bg-gradient-gold text-gold-foreground font-semibold text-base hover:opacity-90 shadow-lg">
                Book Appointment
              </Button>
            </a>
            <a href="tel:+919381126231">
              <Button size="lg" className="bg-gradient-gold text-gold-foreground font-semibold text-base hover:opacity-90 shadow-lg gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/919381126231" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-gold text-gold-foreground font-semibold text-base hover:opacity-90 shadow-lg gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
