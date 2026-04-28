import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import skatingTrainingImage from "@/assets/hero-image-2.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={skatingTrainingImage} 
          alt="Children learning roller skating at The Ayodhya Skates Academy" 
          className="w-full h-[120%] object-cover"
        />
      </motion.div>
      
      {/* Obsidian gradient overlay with scroll-based opacity */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Electric cyan accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      
      {/* Animated Neon Elements */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl" 
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-6 shadow-lg cyan-glow"
            >
              <Zap className="w-4 h-4" />
              District & State Level Training
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight">
              Glide Into
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="block text-primary drop-shadow-[0_0_30px_hsl(186,100%,50%,0.5)]"
              >
                Excellence
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl font-medium"
            >
              Join Ayodhya's premier roller skating academy. Expert coaching, professional training, and a pathway to competitive success for all ages.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 shadow-lg cyan-glow hover:scale-105 transition-all duration-300 btn-haptic"
              >
                <Link to="/admission">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Link to="/about">
                  <Play className="mr-2 w-5 h-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Students Trained" },
                { value: "50+", label: "Medals Won" },
                { value: "8+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 100 }}
                  className="text-center group"
                >
                  <p className="text-2xl md:text-3xl font-black text-primary group-hover:drop-shadow-[0_0_20px_hsl(186,100%,50%,0.6)] transition-all duration-300">{stat.value}</p>
                  <p className="text-sm text-white/70 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="relative transform-3d">
              {/* Main glass card */}
              <motion.div
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-8 bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="text-center">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 8, -8, 0],
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl mb-4"
                  >
                    ⛸️
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-2">Roll Your Way to Success</h3>
                  <p className="text-white/60 mb-6 font-medium">Professional coaching for all skill levels</p>
                  <div className="flex justify-center gap-6">
                    {[
                      { value: "4+", label: "Disciplines" },
                      { value: "10+", label: "Expert Coaches" },
                      { value: "Safe", label: "Environment" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <p className="text-lg font-bold text-primary">{item.value}</p>
                        <p className="text-xs text-white/50 font-medium">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 4, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-primary rounded-xl p-4 shadow-xl cyan-glow"
              >
                <p className="text-primary-foreground font-bold text-lg">🏅 State Champions</p>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -4, 0],
                  rotate: [0, -2, 2, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4.5, 
                  delay: 0.5, 
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 bg-accent rounded-xl p-4 shadow-xl blue-glow"
              >
                <p className="text-accent-foreground font-bold">⭐ Rated #1 in Ayodhya</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
