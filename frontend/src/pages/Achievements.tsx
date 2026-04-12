import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "State Level Championship",
    category: "Speed Skating",
    result: "Gold Medal",
    student: "Ankit Kumar",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    year: "2024",
    title: "District Level Competition",
    category: "Artistic Skating",
    result: "Silver Medal",
    student: "Priya Singh",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    year: "2023",
    title: "State Level Championship",
    category: "Speed Skating",
    result: "Bronze Medal",
    student: "Rahul Verma",
    icon: Medal,
    color: "text-amber-600",
  },
  {
    year: "2023",
    title: "Regional Competition",
    category: "Freestyle",
    result: "Gold Medal",
    student: "Team The Ayodhya Skates",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    year: "2022",
    title: "District Championship",
    category: "Inline Skating",
    result: "1st Place",
    student: "Multiple Students",
    icon: Award,
    color: "text-primary",
  },
  {
    year: "2022",
    title: "Youth Skating Festival",
    category: "All Categories",
    result: "Best Academy Award",
    student: "The Ayodhya Skates",
    icon: Star,
    color: "text-yellow-500",
  },
];

const stats = [
  { value: "50+", label: "Medals Won" },
  { value: "20+", label: "Championships" },
  { value: "15+", label: "State Level Athletes" },
  { value: "5+", label: "National Qualifiers" },
];

const Achievements = () => {
  return (
    <Layout>
      <SEO title="Achievements & Awards" description="Celebrating 50+ medals, 20+ championships, and state-level athletes from The Ayodhya Skates academy. Our students' winning moments." path="/achievements" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Achievements & Awards</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Celebrating the success of our students at every level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-background/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Hall of Fame"
            title="Our Winning Moments"
            subtitle="A timeline of achievements that make us proud"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-sports p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 ${achievement.color}`}>
                    <achievement.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {achievement.year}
                      </span>
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{achievement.student}</p>
                    <p className="font-medium text-primary">{achievement.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
