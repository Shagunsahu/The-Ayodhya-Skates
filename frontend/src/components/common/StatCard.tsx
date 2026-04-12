import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const AnimatedNumber = ({ value, delay }: { value: string; delay: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract the numeric part and suffix (e.g., "500+" -> 500, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(targetNumber);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, targetNumber, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="text-center p-6 group cursor-pointer"
    >
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200
        }}
        className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 group-hover:cyan-glow transition-all duration-300"
      >
        <Icon className="w-7 h-7 text-accent" />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
        className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300"
      >
        <AnimatedNumber value={value} delay={delay + 0.3} />
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.4 }}
        className="text-white/70 text-sm"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default StatCard;
