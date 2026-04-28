import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Star } from "lucide-react";

type Coach = {
  id: string;
  name: string;
  role: string;
  image?: string | null;
  specialization: string;
  experience: string;
  description: string;
  achievements: string[];
};

const Coaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchCoaches = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        const res = await fetch(`${apiUrl}/api/coaches`);
        if (!res.ok) throw new Error(`Failed to fetch coaches: ${res.status}`);
        const data = await res.json();
        if (mounted) setCoaches(data);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load coaches");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchCoaches();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Layout>
      <SEO title="Our Coaches" description="Meet the certified and experienced coaching team at The Ayodhya Skates. Expert trainers dedicated to developing skating champions." path="/coaches" />

      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Coaches</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Meet the dedicated team behind Ayodhya's skating champions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Expert Team"
            title="Certified & Experienced Coaches"
            subtitle="Our coaches bring years of experience and passion to help you achieve your skating goals"
          />

          {loading ? (
            <div className="py-12 text-center">Loading coaches...</div>
          ) : error ? (
            <div className="py-12 text-center text-destructive">{error}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-sports overflow-hidden group"
                >
                  <div className="h-64 bg-secondary overflow-hidden">
                    {coach.image ? (
                      // image may be an absolute URL or path; leave rendering to browser
                      // If backend stores relative paths, ensure they are accessible from frontend
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <span className="text-6xl">👨‍🏫</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{coach.role}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent" />
                        {coach.experience}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{coach.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground uppercase tracking-wider">Specialization</p>
                      <p className="text-sm text-muted-foreground">{coach.specialization}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {(coach.achievements || []).slice(0, 2).map((achievement) => (
                          <span
                            key={achievement}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Coaches;
