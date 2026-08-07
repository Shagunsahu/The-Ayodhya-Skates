import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpeg";

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
                alt="Mr. Ravinder Kumar - Founder & Head Coach of The Ayodhya Skates"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Mr. Ravinder Kumar</h3>
                <p className="text-white/80">Founder & Head Coach</p>
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
                The Ayodhya Skates has grown into a respected platform for roller skating training, athlete development,
                and school sports promotion across Uttar Pradesh.
              </p>
              <p>
                He serves as the Founder & Head Coach of The Ayodhya Skates, Joint Secretary of the Uttar Pradesh Roller
                Sports Association (UPRSA), and District Secretary of the District Roller Skating Association, Ayodhya.
              </p>
              <p>
                A national speed inline skating player himself, Ravinder Kumar brings both competitive experience and
                administrative leadership to every program, inspiring students through discipline, teamwork, and excellence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Founder & Head Coach</p>
                <p className="text-sm text-muted-foreground">The Ayodhya Skates</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-primary">Joint Secretary</p>
                <p className="text-sm text-muted-foreground">UPRSA</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-primary">National Player</p>
                <p className="text-sm text-muted-foreground">Speed Inline Skating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
