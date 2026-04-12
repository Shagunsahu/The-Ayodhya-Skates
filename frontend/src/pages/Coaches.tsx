import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpg";
import { Star } from "lucide-react";

const coaches = [
  {
    name: "Mr. Ravinder Kumar",
    role: "Founder & Head Coach",
    image: founderImage,
    specialization: "Speed Skating, Competition Training",
    experience: "8+ Years",
    description: "Certified skating instructor with experience training state-level athletes.",
    achievements: ["State Level Certified Coach", "500+ Students Trained", "Multiple Award Winner"],
  },
  {
    name: "Coach Arun Yadav",
    role: "Senior Coach",
    image: null,
    specialization: "Artistic Skating, Beginners",
    experience: "5+ Years",
    description: "Specializes in teaching young children and artistic skating techniques.",
    achievements: ["Certified Instructor", "Artistic Skating Expert", "Child Training Specialist"],
  },
  {
    name: "Coach Sunita Mishra",
    role: "Assistant Coach",
    image: null,
    specialization: "Freestyle, Safety Training",
    experience: "3+ Years",
    description: "Focus on freestyle techniques and ensuring safe skating practices.",
    achievements: ["Safety Certified", "Freestyle Expert", "Youth Development Focus"],
  },
];

const Coaches = () => {
  return (
    <Layout>
      <SEO title="Our Coaches" description="Meet the certified and experienced coaching team at The Ayodhya Skates. Expert trainers dedicated to developing skating champions." path="/coaches" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Coaches</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Meet the dedicated team behind Ayodhya's skating champions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Expert Team"
            title="Certified & Experienced Coaches"
            subtitle="Our coaches bring years of experience and passion to help you achieve your skating goals"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-sports overflow-hidden group"
              >
                {/* Coach Image */}
                <div className="h-64 bg-secondary overflow-hidden">
                  {coach.image ? (
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-6xl">👨‍🏫</span>
                    </div>
                  )}
                </div>

                {/* Coach Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{coach.role}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent" />
                      {coach.experience}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{coach.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wider">Specialization</p>
                    <p className="text-sm text-muted-foreground">{coach.specialization}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {coach.achievements.slice(0, 2).map((achievement) => (
                        <span
                          key={achievement}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
