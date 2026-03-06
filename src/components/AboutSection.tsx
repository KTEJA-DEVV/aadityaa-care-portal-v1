import { Award, Heart, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Patients Treated", value: "10,000+" },
  { icon: Heart, label: "Successful Deliveries", value: "5,000+" },
  { icon: Award, label: "Specializations", value: "OB-GYN" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Trusted Women's Healthcare
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aadityaa Hospital is a premier women's healthcare center led by <strong className="text-foreground">Dr. Sreelatha Gunda (MBBS, DGO)</strong>, a highly experienced Obstetrician and Gynaecologist. With a patient-centered approach, we provide comprehensive care for pregnancy, gynecological health, fertility, and overall women's wellness in a warm and supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
