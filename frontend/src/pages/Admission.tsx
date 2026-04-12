import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: CheckCircle, text: "Professional certified coaches" },
  { icon: Shield, text: "Complete safety gear provided" },
  { icon: Clock, text: "Flexible morning & evening batches" },
  { icon: Award, text: "Competition preparation included" },
];

const Admission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    discipline: "",
    batch: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age, 10) || 0,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast({
        title: "Application Submitted!",
        description: "We'll contact you within 24 hours to confirm your admission.",
      });

      setFormData({
        studentName: "",
        age: "",
        parentName: "",
        phone: "",
        email: "",
        address: "",
        discipline: "",
        batch: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO title="Admission & Enrollment" description="Join The Ayodhya Skates academy. Enrollment information, fee structure, and registration for roller skating training programs in Ayodhya." path="/admission" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6">
              🎉 Admissions Open 2025!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join The Ayodhya Skates</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Start your skating journey with the region's most trusted academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 text-background"
              >
                <benefit.icon className="w-6 h-6 text-accent shrink-0" />
                <span className="text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Application Form"
                title="Apply for Admission"
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      placeholder="Enter student name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="4"
                      max="50"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      placeholder="Enter age"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="Enter parent name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 96965 75777"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your complete address"
                    rows={2}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Discipline *</Label>
                    <Select onValueChange={(value) => handleSelectChange("discipline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select discipline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speed">Speed Skating</SelectItem>
                        <SelectItem value="artistic">Artistic Skating</SelectItem>
                        <SelectItem value="freestyle">Freestyle Skating</SelectItem>
                        <SelectItem value="hockey">Roller Hockey</SelectItem>
                        <SelectItem value="general">General Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Batch *</Label>
                    <Select onValueChange={(value) => handleSelectChange("batch", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (5:30 AM - 9:00 AM)</SelectItem>
                        <SelectItem value="evening">Evening (5:00 PM - 6:30 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Previous Skating Experience</Label>
                  <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Complete Beginner</SelectItem>
                      <SelectItem value="basic">Basic (Less than 6 months)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (6-12 months)</SelectItem>
                      <SelectItem value="advanced">Advanced (1+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions?"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Fee Structure */}
              <div className="card-sports p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Fee Structure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Registration Fee</span>
                    <span className="font-semibold text-foreground">₹500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Monthly Fee</span>
                    <span className="font-semibold text-foreground">₹1,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Quarterly Fee</span>
                    <span className="font-semibold text-foreground">₹4,000</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Safety gear rental available. Discounts for siblings.
                </p>
              </div>

              {/* Training Schedule */}
              <div className="card-sports p-6 lg:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Training Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <div>
                      <p className="font-medium text-foreground">Morning Batch</p>
                      <p className="text-sm text-muted-foreground">5:30 AM - 9:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div>
                      <p className="font-medium text-foreground">Evening Batch</p>
                      <p className="text-sm text-muted-foreground">5:00 PM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Training conducted 6 days a week (Monday - Saturday)
                </p>
              </div>

              {/* Contact */}
              <div className="card-sports p-6 lg:p-8 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Contact us for any queries about admission or to schedule a visit.
                </p>
                <a
                  href="tel:+919696575777"
                  className="inline-flex items-center gap-2 font-semibold hover:underline"
                >
                  📞 +91 96965 75777
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
