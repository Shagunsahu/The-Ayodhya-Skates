import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Event = {
  id: string;
  title: string;
  date: string;
  time?: string | null;
  location?: string | null;
  type?: string | null;
  description?: string | null;
  status?: string | null;
  result?: string | null;
  isPastEvent: boolean;
};

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        const response = await fetch(`${apiUrl}/api/events`);
        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status}`);
        }
        const data = await response.json();
        if (mounted) setEvents(data);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load events");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchEvents();

    return () => {
      mounted = false;
    };
  }, []);

  const upcomingEvents = useMemo(() => events.filter((event) => !event.isPastEvent), [events]);
  const pastEvents = useMemo(() => events.filter((event) => event.isPastEvent), [events]);

  return (
    <Layout>
      <SEO title="Events & Championships" description="Stay updated with upcoming skating camps, competitions, and championships at The Ayodhya Skates. Join our events and showcase your talent." path="/events" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Events & Championships</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Stay updated with our upcoming events, camps, and competitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Mark Your Calendar"
            title="Upcoming Events"
            subtitle="Don't miss out on these exciting opportunities to learn, compete, and celebrate"
          />

          {loading ? (
            <div className="py-12 text-center text-muted-foreground">Loading events...</div>
          ) : error ? (
            <div className="py-12 text-center text-destructive">{error}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-sports overflow-hidden group hover:-translate-y-2"
                >
                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                        {event.type || "Event"}
                      </span>
                      <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                        {event.status || "Upcoming"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">{event.description || "Details will be shared soon."}</p>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time || "TBA"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location || "TBA"}</span>
                      </div>
                    </div>

                    <Button asChild className="w-full mt-6" variant="outline">
                      <Link to="/contact">Inquire Now</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Past Events"
            title="Event History"
            subtitle="A look back at our successful events and competitions"
          />

          {pastEvents.length === 0 ? (
            <div className="max-w-3xl mx-auto text-center text-muted-foreground py-12">
              No past events found yet.
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-sports p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="text-sm bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-medium whitespace-nowrap">
                    {event.result || "Completed"}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
