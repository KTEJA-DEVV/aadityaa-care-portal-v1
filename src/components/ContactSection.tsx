import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Get in Touch</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-80 md:h-full min-h-[320px]">
            <iframe
              title="Aadityaa Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5!2d78.5564!3d17.3384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1f6e2c3b3b1%3A0x1234567890abcdef!2sBN+Reddy+Nagar%2C+Hastinapuram%2C+Hyderabad%2C+Telangana+500079!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            <div className="bg-card rounded-lg p-6 shadow-card flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-sm text-muted-foreground">AADITYAA HOSPITAL, 8-7-91 / 15 / P-4 / 56, Plot No-56, Teachers Colony, ZP Road, BN Reddy Nagar, RR Dist - 500079</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:9381126231" className="text-sm text-primary hover:underline">9381126231</a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:aadityaahospitals@gmail.com" className="text-sm text-primary hover:underline">aadityaahospitals@gmail.com</a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
