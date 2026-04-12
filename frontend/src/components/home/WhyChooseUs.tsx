import { motion } from "framer-motion";
import { Target, Users, Trophy, Shield } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const features = [
  {
    icon: Target,
    title: "Professional Training",
    description: "Structured curriculum designed for beginners to advanced skaters with personalized coaching.",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description: "Programs tailored for children, teens, and adults. Never too early or late to start skating!",
  },
  {
    icon: Trophy,
    title: "Competition Ready",
    description: "Prepare for district, state, and national level competitions with our champion-making approach.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Complete safety gear provided. Trained instructors ensure a safe learning environment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Professional dot texture overlay */}
      <div className="absolute inset-0 texture-dots pointer-events-none" />
      <div className="absolute inset-0 texture-mesh pointer-events-none" />
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why Ayodhya Skates"
          title="Train With The Best"
          subtitle="We don't just teach skating - we build champions. Our holistic approach combines technique, fitness, and mental preparation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="neon-card p-6 text-center group cursor-pointer relative overflow-hidden bg-card"
            >
              {/* Cyan glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:cyan-glow transition-all duration-500"
                >
                  <feature.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
