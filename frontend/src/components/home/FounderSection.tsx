import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpg";

const FounderSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderImage}
                alt="Mr. Ravinder Kumar - Founder & CEO of The Ayodhya Skates"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Mr. Ravinder Kumar</h3>
                <p className="text-white/80">Founder & CEO</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-primary/10 text-primary">
              Meet Our Founder
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              A Vision for Excellence in Skating
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Under the visionary leadership of <strong className="text-foreground">Mr. Ravinder Kumar</strong>, 
                The Ayodhya Skates has grown from a small training initiative to one of the region's most 
                respected roller skating academies.
              </p>
              <p>
                With over 8 years of dedication to the sport, Mr. Kumar has personally trained 
                hundreds of students, many of whom have gone on to compete at district, state, 
                and national levels.
              </p>
              <p>
                His philosophy is simple: "Every child has the potential to be a champion. 
                We just need to provide the right training, environment, and encouragement."
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
