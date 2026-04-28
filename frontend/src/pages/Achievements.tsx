import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Trophy, Medal, Award, Star } from "lucide-react";

type Achievement = {
  id: string;
  year: string;
  title: string;
  category: string;
  result: string;
  student: string;
  iconName: string;
  color: string;
};

const iconMap = {
  Trophy,
  Medal,
  Award,
  Star,
};

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchAchievements = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        const response = await fetch(`${apiUrl}/api/achievements`);
        if (!response.ok) {
          throw new Error(`Failed to fetch achievements: ${response.status}`);
        }
        const data = await response.json();
        if (mounted) setAchievements(data);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load achievements");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAchievements();

    return () => {
      mounted = false;
    };
  }, []);

  const stats = useMemo(() => {
    const uniqueStudents = new Set(achievements.map((item) => item.student)).size;
    const uniqueCategories = new Set(achievements.map((item) => item.category)).size;
    const uniqueYears = new Set(achievements.map((item) => item.year)).size;
    return [
      { value: String(achievements.length), label: "Total Records" },
      { value: String(uniqueCategories), label: "Categories" },
      { value: String(uniqueStudents), label: "Students" },
      { value: String(uniqueYears), label: "Years Covered" },
    ];
  }, [achievements]);

  return (
    <Layout>
      <SEO title="Achievements & Awards" description="Celebrating the success of our students with live achievements data from the database." path="/achievements" />

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

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Hall of Fame"
            title="Our Winning Moments"
            subtitle="A timeline of achievements that make us proud"
          />

          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="py-12 text-center text-muted-foreground">Loading achievements...</div>
            ) : error ? (
              <div className="py-12 text-center text-destructive">{error}</div>
            ) : (
              <div className="space-y-6">
                {achievements.map((achievement, index) => {
                  const AchievementIcon = iconMap[achievement.iconName as keyof typeof iconMap] ?? Trophy;

                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card-sports p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 ${achievement.color || "text-primary"}`}>
                        <AchievementIcon className="w-7 h-7" />
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
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
