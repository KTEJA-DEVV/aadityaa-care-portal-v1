import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Aadityaa Hospital" className="h-14 w-auto rounded mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              AADITYAA HOSPITAL, 8-7-91 / 15 / P-4 / 56, Plot No-56, Teachers Colony, ZP Road, BN Reddy Nagar, RR Dist - 500079
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Doctor", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {l}
                </a>
              ))}
              <a href="#appointment" className="block text-sm text-secondary font-semibold hover:underline">
                Book Appointment
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/p/DWEJwwikTCp/?igsh=cjNsbWx5djFncms5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919381126231" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:9381126231" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors" aria-label="Call">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Aadityaa Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
