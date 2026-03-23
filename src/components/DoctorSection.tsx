import { GraduationCap, Award, Briefcase, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-placeholder.jpg";

const otherDoctors = [
  { name: "Dr. Kasireddy Krishnareddy", specialization: "Anesthesia" },
  { name: "Dr. Karthikeya N", specialization: "Paediatrics" },
  { name: "Dr. Vennam Sirisha", specialization: "Radiology" },
  { name: "Dr. Mounika Reddy", specialization: "Dental" },
  { name: "Dr. Suresh Babu", specialization: "Orthopaedics" },
  { name: "Dr. Praveen Kumar", specialization: "General Medicine" },
  { name: "Dr. Sravani", specialization: "General Medicine" },
];

const DoctorSection = () => {
  return (
    <section id="doctor" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Doctors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Meet Our Expert Team
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Doctor */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto mb-20">
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-card flex-shrink-0">
            <img src={doctorImg} alt="Dr. Sreelatha Gunda" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground font-display mb-2">Dr. Sreelatha Gunda</h3>
            <p className="text-secondary font-semibold mb-6">MBBS, DGO — Obstetrician & Gynaecologist</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">MBBS and DGO from a premier medical institution with extensive clinical training.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Specializing in obstetrics, gynecology, fertility guidance, and women's preventive health.</p>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Over 15 years of dedicated experience providing compassionate, patient-centered care.</p>
              </div>
            </div>

            <a href="#appointment">
              <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                Book an Appointment
              </Button>
            </a>
          </div>
        </div>

        {/* Other Doctors */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-foreground font-display mb-8 text-center">Our Specialist Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherDoctors.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{doc.name}</p>
                  <p className="text-muted-foreground text-xs">{doc.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
