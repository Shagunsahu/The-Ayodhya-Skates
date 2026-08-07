import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { usePartners } from "@/hooks/useSponsors";
import { Building, Handshake, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const { data: partners, isLoading, error } = usePartners();

  return (
    <Layout>
      <SEO
        title="Our Partners & Schools"
        description="Discover the trusted schools and organizations partnering with The Ayodhya Skates company to nurture skating champions in Ayodhya."
        path="/partners"
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Partners</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Nurturing talent through collaborative sponsorships and school programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners List Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Collaborations"
            title="Trusted Partnerships"
            subtitle="We work alongside the region's leading schools and sports bodies to build world-class athletes."
          />

          {isLoading ? (
            <div className="py-12 text-center text-muted-foreground">Loading partners...</div>
          ) : error ? (
            <div className="py-12 text-center text-destructive">
              Failed to load partners. Please try again.
            </div>
          ) : partners && partners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border flex flex-col items-center justify-between min-h-[180px] group"
                >
                  <div className="w-24 h-20 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300">
                    {partner.logo_url ? (
                      <img
                        src={partner.logo_url}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-5xl">🏫</div>
                    )}
                  </div>
                  <h4 className="font-bold text-foreground text-sm md:text-base leading-snug">
                    {partner.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground">No partners available</div>
          )}

          {/* Become a Partner Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              {/* Parallax dots texture */}
              <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left space-y-2 flex-1">
                <h3 className="text-2xl font-extrabold tracking-tight">Become a Partner</h3>
                <p className="text-white/80 text-sm max-w-md">
                  Join our academy as a school, organization, or sponsor to foster youth athletic development in Ayodhya. Let's make sports accessible together.
                </p>
              </div>
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-12 rounded-xl"
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
