import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { Button } from "@/components/ui/button";

const disciplines = [
  {
    title: "Speed Skating",
    description: "Race against time on inline or quad skates. Build stamina, speed, and competitive edge.",
    icon: "🏎️",
  },
  {
    title: "Artistic Skating",
    description: "Express yourself through dance and choreography on wheels. Grace meets athleticism.",
    icon: "💃",
  },
  {
    title: "Roller Hockey",
    description: "Team sport combining skating skills with hockey techniques. Fast-paced and exciting.",
    icon: "🏒",
  },
  {
    title: "Freestyle Skating",
    description: "Master slalom, tricks, and urban skating. Creative expression through technical skill.",
    icon: "🎯",
  },
];

const DisciplinesPreview = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Professional grid texture */}
      <div className="absolute inset-0 texture-grid pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="What We Teach"
          title="Skating Disciplines"
          subtitle="From speed to artistic, we offer comprehensive training in all major roller skating disciplines."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -16,
                scale: 1.03,
              }}
              className="neon-card p-6 group cursor-pointer relative overflow-hidden bg-card"
            >
              {/* Cyan glow border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ boxShadow: 'inset 0 0 30px hsl(186 100% 50% / 0.15)' }} 
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <motion.div 
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 glass-card bg-secondary flex items-center justify-center mb-4 text-4xl group-hover:cyan-glow transition-all duration-300 rounded-xl"
                >
                  {discipline.icon}
                </motion.div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-all duration-300">
                  {discipline.title}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">{discipline.description}</p>
                
                {/* Learn more indicator */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl cyan-glow hover:scale-105 transition-transform duration-300 font-bold btn-haptic">
            <Link to="/disciplines">
              View All Disciplines
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DisciplinesPreview;
