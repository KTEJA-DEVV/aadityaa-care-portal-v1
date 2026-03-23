import { GraduationCap, Award, Briefcase, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/dr-sreelatha.png";

interface Doctor {
  name: string;
  qualifications: string;
  designation: string;
}

interface Department {
  name: string;
  doctors: Doctor[];
}

const departments: Department[] = [
  {
    name: "Obstetrics & Gynaecology",
    doctors: [
      {
        name: "Dr. K. Anusha",
        qualifications: "MBBS, MS (OBS & GYN)",
        designation: "Consultant Obstetrician & Gynaecologist",
      },
    ],
  },
  {
    name: "Anaesthesia",
    doctors: [
      {
        name: "Dr. Kasireddy Krishnareddy",
        qualifications: "MBBS, DA, FIPM, FUGRA",
        designation: "Consultant Anaesthesiologist & Pain Physician",
      },
      {
        name: "Dr. Naveen Kumar",
        qualifications: "MBBS, DNB (Anaesthesia)",
        designation: "Consultant Anaesthesiologist",
      },
    ],
  },
  {
    name: "Paediatrics & Neonatology",
    doctors: [
      {
        name: "Dr. Karthikeya N",
        qualifications: "MBBS, DCH, Fellowship in Neonatology",
        designation: "Consultant Neonatologist",
      },
      {
        name: "Dr. Shruti Tedla",
        qualifications: "",
        designation: "Consultant Paediatrician & Neonatologist",
      },
    ],
  },
  {
    name: "General Surgery",
    doctors: [
      {
        name: "Dr. Srinu Naik",
        qualifications: "MBBS, MS (Gen Surgery)",
        designation: "General, Laparoscopic & Laser Surgeon",
      },
      {
        name: "Dr. G. Suresh Reddy",
        qualifications: "MS (General Surgery)",
        designation: "General & Laparoscopic Surgeon",
      },
    ],
  },
  {
    name: "General Medicine",
    doctors: [
      {
        name: "Dr. G. Sravan Kumar",
        qualifications: "MBBS, DNB (General Medicine), MNAMS",
        designation: "Consultant General Physician",
      },
    ],
  },
  {
    name: "Orthopaedics",
    doctors: [
      {
        name: "Dr. Kumar Bhanu",
        qualifications: "D.Ortho, DNB (Orthopedics)",
        designation: "Fellowship in Robotic Joint Replacement & Arthroscopy-Sports Medicine",
      },
    ],
  },
  {
    name: "Radiology",
    doctors: [
      {
        name: "Dr. Kancharla Mounika",
        qualifications: "MBBS, MD (Radiodiagnosis)",
        designation: "Consultant Radiologist",
      },
      {
        name: "Dr. Swetha B",
        qualifications: "MBBS, DGO, DNB (Radiodiagnosis)",
        designation: "Consultant Radiologist",
      },
    ],
  },
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
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-card flex-shrink-0 bg-muted">
            <img src={doctorImg} alt="Dr. Sreelatha Gunda" className="w-full h-full object-cover object-top" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground font-display mb-2">Dr. Sreelatha Gunda</h3>
            <p className="text-secondary font-semibold mb-1">M.B.B.S, D.G.O</p>
            <p className="text-muted-foreground text-sm mb-6">
              Consultant Obstetrics & Gynaecology
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Fellowship in Cosmetic Gynaecology</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Fellowship (IMA) in Basic Laparoscopy & Hysteroscopy</p>
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

        {/* Departments & Doctors */}
        <div className="max-w-5xl mx-auto space-y-10">
          {departments.map((dept) => (
            <div key={dept.name}>
              <h3 className="text-lg font-bold text-primary font-display mb-4 border-l-4 border-secondary pl-3">
                {dept.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dept.doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Stethoscope className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm">{doc.name}</p>
                      {doc.qualifications && (
                        <p className="text-xs text-secondary font-medium mt-0.5">{doc.qualifications}</p>
                      )}
                      <p className="text-muted-foreground text-xs mt-1">{doc.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
