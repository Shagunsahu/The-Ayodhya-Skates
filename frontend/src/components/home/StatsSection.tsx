import { motion } from "framer-motion";
import { Users, Trophy, Medal, Calendar } from "lucide-react";
import StatCard from "../common/StatCard";

const stats = [
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Trophy, value: "50+", label: "Competitions Won" },
  { icon: Medal, value: "100+", label: "Medals Earned" },
  { icon: Calendar, value: "8+", label: "Years Experience" },
];

const StatsSection = () => {
  return (
    <section className="py-16 hero-gradient relative overflow-hidden">
      {/* Professional grid overlay */}
      <div className="absolute inset-0 texture-grid opacity-30 pointer-events-none" />
      
      {/* Decorative dot pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
