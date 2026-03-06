import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Pregnancy Care",
  "Gynecology Consultation",
  "Fertility Guidance",
  "Women Health Checkup",
  "Ultrasound & Diagnostics",
  "Maternity Care",
];

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.date) e.date = "Select a date";
    if (!form.service) e.service = "Select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast.success("Appointment request submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", date: "", service: "", message: "" });
    setErrors({});
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-accent">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Appointment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Book Your Visit</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-card space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Input
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={errors.date ? "border-destructive" : ""}
              />
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
            </div>
          </div>
          <div>
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                <SelectValue placeholder="Select Service *" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
          </div>
          <Textarea
            placeholder="Additional message (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
          />
          <Button type="submit" size="lg" className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 text-base font-semibold">
            Submit Appointment Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
