import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    title: "Summer Skating Camp 2025",
    date: "June 1 - June 15, 2025",
    time: "5:30 AM - 9:00 AM",
    location: "The Ayodhya Skates Academy",
    type: "Camp",
    description: "Intensive 15-day training camp for all skill levels. Special focus on competition preparation.",
    status: "Registrations Open",
  },
  {
    title: "District Level Championship",
    date: "March 15, 2025",
    time: "8:00 AM onwards",
    location: "District Sports Complex",
    type: "Competition",
    description: "Annual district championship in speed skating and artistic categories.",
    status: "Coming Soon",
  },
  {
    title: "Annual Day Celebration",
    date: "April 20, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "The Ayodhya Skates Academy",
    type: "Event",
    description: "Showcase performances, prize distribution, and celebration of achievements.",
    status: "Save the Date",
  },
];

const pastEvents = [
  {
    title: "State Level Roller Skating Championship 2024",
    date: "December 2024",
    result: "3 Gold, 2 Silver, 5 Bronze Medals",
  },
  {
    title: "NTPC Tanda Skating Workshop",
    date: "June 2023",
    result: "100+ Participants Trained",
  },
  {
    title: "District Championship 2023",
    date: "October 2023",
    result: "Best Academy Award",
  },
];

const Events = () => {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-sports overflow-hidden group hover:-translate-y-2"
              >
                {/* Event Type Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                      {event.type}
                    </span>
                    <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                </div>

                {/* Event Details */}
                <div className="p-6 pt-0">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6" variant="outline">
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
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

          <div className="max-w-3xl mx-auto space-y-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
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
                  {event.result}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
