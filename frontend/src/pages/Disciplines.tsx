import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Award } from "lucide-react";

const disciplines = [
  {
    title: "Speed Skating",
    icon: "🏎️",
    description: "Race against time and competitors. Build incredible stamina, speed, and competitive edge through structured training programs.",
    features: ["Inline & Quad Variants", "Competition Training", "Endurance Building", "Race Techniques"],
    duration: "45-60 mins/session",
    suitable: "Ages 6+",
    level: "All Levels",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Artistic Skating",
    icon: "💃",
    description: "Express yourself through graceful movements, dance choreography, and technical spins on wheels. Where art meets athletics.",
    features: ["Dance Choreography", "Figure Movements", "Spins & Jumps", "Music Interpretation"],
    duration: "60 mins/session",
    suitable: "Ages 5+",
    level: "Beginner to Advanced",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Roller Hockey",
    icon: "🏒",
    description: "Team sport combining skating skills with hockey techniques. Fast-paced, exciting, and great for building teamwork.",
    features: ["Team Strategies", "Stick Handling", "Goal Scoring", "Defense Techniques"],
    duration: "60-75 mins/session",
    suitable: "Ages 8+",
    level: "Intermediate+",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Freestyle Skating",
    icon: "🎯",
    description: "Master slalom cones, tricks, and urban skating techniques. Creative expression through technical mastery.",
    features: ["Slalom Training", "Urban Tricks", "Obstacle Navigation", "Style Development"],
    duration: "45-60 mins/session",
    suitable: "Ages 7+",
    level: "Intermediate+",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Inline Skating",
    icon: "⛸️",
    description: "Modern inline skates for speed, fitness, and recreation. Perfect for those looking to stay active and have fun.",
    features: ["Balance Training", "Fitness Focus", "Recreational Skills", "Safety Techniques"],
    duration: "45 mins/session",
    suitable: "Ages 5+",
    level: "Beginner Friendly",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Quad Skating",
    icon: "🛼",
    description: "Traditional four-wheel skating for stability and fun. Ideal for beginners and artistic skating enthusiasts.",
    features: ["Stability Focus", "Traditional Style", "Fun Sessions", "Foundation Building"],
    duration: "45 mins/session",
    suitable: "Ages 4+",
    level: "Perfect for Beginners",
    color: "from-orange-500 to-orange-600",
  },
];

const Disciplines = () => {
  return (
    <Layout>
      <SEO title="Skating Disciplines" description="Explore speed skating, artistic skating, freestyle, and inline hockey at The Ayodhya Skates. Professional training programs for all skill levels." path="/disciplines" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Skating Disciplines</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive training in all major roller skating styles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="What We Teach"
            title="Choose Your Skating Style"
            subtitle="From speed to artistic, we offer training in every discipline to match your interests and goals"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={discipline.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-sports overflow-hidden group hover:-translate-y-2"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${discipline.color} p-6 text-white`}>
                  <span className="text-5xl block mb-3">{discipline.icon}</span>
                  <h3 className="text-xl font-bold">{discipline.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">{discipline.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {discipline.features.map((feature) => (
                      <span key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {discipline.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {discipline.suitable}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {discipline.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Ready to start your skating journey?</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/admission">
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Disciplines;
