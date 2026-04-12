import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const benefits = [
    "Professional coaching by certified instructors",
    "Safe training environment with proper equipment",
    "Flexible morning & evening batches",
    "Competition preparation included",
  ];

  return (
    <section ref={sectionRef} className="section-padding hero-gradient relative overflow-hidden">
      {/* Professional grid texture with parallax */}
      <motion.div 
        className="absolute inset-0 texture-grid opacity-20 pointer-events-none"
        style={{ y: patternY }}
      />
      
      {/* Background pattern with parallax */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"
        style={{ y: backgroundY }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6">
              🎉 Admissions Open for 2025!
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Skating Journey?
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join The Ayodhya Skates - Ayodhya's most trusted roller skating academy. Limited seats available 
              for the new batch. Don't miss this opportunity!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
