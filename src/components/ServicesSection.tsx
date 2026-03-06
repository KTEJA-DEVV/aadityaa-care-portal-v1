import { Baby, Stethoscope, HeartPulse, ShieldCheck, ScanLine, Ribbon } from "lucide-react";

const services = [
  { icon: Baby, title: "Pregnancy Care", desc: "Complete prenatal and postnatal care ensuring a healthy journey for mother and baby." },
  { icon: Stethoscope, title: "Gynecology Consultation", desc: "Expert consultations for all gynecological concerns with personalized treatment plans." },
  { icon: HeartPulse, title: "Fertility Guidance", desc: "Compassionate fertility evaluation and guidance to help you on your path to parenthood." },
  { icon: ShieldCheck, title: "Women Health Checkups", desc: "Comprehensive health screenings designed specifically for women's wellness needs." },
  { icon: ScanLine, title: "Ultrasound & Diagnostics", desc: "Advanced diagnostic imaging with state-of-the-art ultrasound technology." },
  { icon: Ribbon, title: "Maternity Care", desc: "End-to-end maternity services from conception through delivery and beyond." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-accent">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Comprehensive Women's Care
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
