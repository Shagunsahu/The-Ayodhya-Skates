import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Award } from "lucide-react";

const disciplines = [
  {
    title: "Beginner Skating Training",
    icon: "🛼",
    description: "Structured program for first-time skaters focusing on safety, core balance, and key movement fundamentals.",
    features: ["Balance & Coordination", "Basic Skating Techniques", "Safe Falling & Recovery", "Turning & Stopping", "Confidence Building"],
    duration: "45-60 mins/session",
    suitable: "Ages 4+",
    level: "First-Time Skaters",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Kids Skating Program",
    icon: "👶",
    description: "Fun and safe coaching designed specifically for children to build coordination and confidence on wheels.",
    features: ["Age-Appropriate Training", "Skill-Based Learning", "Fitness & Coordination", "Confidence Development", "Safe Learning Environment"],
    duration: "45 mins/session",
    suitable: "Ages 4-12",
    level: "Beginner Friendly",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Personal (One-to-One) Training",
    icon: "🎯",
    description: "Individual coaching tailored directly to the athlete's specific goals, pace, and competitive requirements.",
    features: ["Personalized Coaching", "Flexible Schedule", "Performance Monitoring", "Rapid Skill Improvement", "Competition Preparation"],
    duration: "60 mins/session",
    suitable: "All Ages",
    level: "Custom Tailored",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Group Training",
    icon: "👥",
    description: "Interactive coaching sessions emphasizing teamwork, peer learning, and collaborative skill enhancement.",
    features: ["Batch Training", "Team Drills", "Skill Enhancement", "Fitness Sessions", "Motivational Learning"],
    duration: "60 mins/session",
    suitable: "Ages 6+",
    level: "All Levels",
    color: "from-green-500 to-green-600",
  },
  {
    title: "School Skating Training Program",
    icon: "🏫",
    description: "Professional coaching for schools seeking to integrate skating into their PE curriculum and athletic structure.",
    features: ["Weekly & Annual Coaching", "PE Curriculum Integration", "Certified Coaches", "Student Skill Assessment", "Inter-School Competition Training"],
    duration: "School Hours",
    suitable: "School Students",
    level: "Academic Programs",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "School Contract Training",
    icon: "📝",
    description: "Long-term coaching partnerships with schools, providing dedicated coaches and tournament support.",
    features: ["Dedicated Coach Deployment", "Regular Student Training", "Tournament Preparation", "Annual Performance Reports", "Sports Day & Event Support"],
    duration: "Contractual",
    suitable: "Partner Schools",
    level: "Institutional",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Professional Athlete Training",
    icon: "⚡",
    description: "Advanced, high-performance coaching for competitive athletes targeting state, national, and international championships.",
    features: ["Speed & Technique Development", "Endurance Training", "Race Strategy", "Video Performance Analysis", "National & State Championship Prep"],
    duration: "90 mins/session",
    suitable: "Ages 8+",
    level: "Advanced / Competitive",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Championship Preparation",
    icon: "🏆",
    description: "Specialized, intensive training modules targeting upcoming athletic competitions and race events.",
    features: ["Intensive Practice Sessions", "Race Simulation", "Mental Conditioning", "Performance Evaluation", "Competition Readiness"],
    duration: "90-120 mins/session",
    suitable: "Ages 7+",
    level: "Tournament Bound",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Summer & Winter Training Camps",
    icon: "⛺",
    description: "Seasonal intensive coaching camps to rapidly upgrade skills, physical stamina, and racing technique.",
    features: ["High-Performance Coaching", "Technical Skill Development", "Fitness & Conditioning", "Team Activities", "Competition Exposure"],
    duration: "2-4 Weeks",
    suitable: "All Ages",
    level: "All Skill Levels",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Fitness & Conditioning",
    icon: "💪",
    description: "Off-skate athletic development program targeting strength, agility, core stability, and raw endurance.",
    features: ["Strength Training", "Agility Drills", "Balance Exercises", "Core Stability", "Flexibility & Endurance"],
    duration: "45-60 mins/session",
    suitable: "Ages 6+",
    level: "Athletic Development",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Talent Development Program",
    icon: "🌟",
    description: "Identify, sponsor, and nurture promising future skating champions with custom development paths.",
    features: ["Skill Assessment", "Individual Development Plans", "Advanced Coaching", "Competition Opportunities", "Long-Term Athlete Development"],
    duration: "Ongoing Mentorship",
    suitable: "By Selection",
    level: "High-Potential Athletes",
    color: "from-cyan-500 to-cyan-600",
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
