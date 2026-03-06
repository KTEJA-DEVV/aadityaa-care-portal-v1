import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
