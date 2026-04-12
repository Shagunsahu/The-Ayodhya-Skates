import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ badge, title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-white/20 text-white" 
            : "bg-primary/10 text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
          light ? "text-white/80" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
