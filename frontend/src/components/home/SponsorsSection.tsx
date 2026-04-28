import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useSponsors, usePartners } from "@/hooks/useSponsors";
import { Skeleton } from "@/components/ui/skeleton";

const SponsorsSection = () => {
  const { data: sponsors, isLoading: sponsorsLoading } = useSponsors();
  const { data: partners, isLoading: partnersLoading } = usePartners();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Sponsors 
        <SectionHeader
          badge="Our Sponsors"
          title="Proudly Sponsored By"
          subtitle="Organizations that support our mission of excellence"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {sponsorsLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))
          ) : sponsors && sponsors.length > 0 ? (
            sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                {sponsor.logo_url ? (
                  <img 
                    src={sponsor.logo_url} 
                    alt={sponsor.name} 
                    className="w-16 h-16 object-contain mx-auto mb-3"
                  />
                ) : (
                  <div className="text-4xl md:text-5xl mb-3">{sponsor.logo_emoji}</div>
                )}
                <h4 className="font-bold text-foreground text-sm md:text-base mb-1">{sponsor.name}</h4>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {sponsor.sponsor_type}
                </span>
              </motion.div>
            ))
          ) : (
            <p className="col-span-4 text-center text-muted-foreground">No sponsors available</p>
          )}
        </div>
            */}
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-accent/20 text-accent-foreground">
            Our Partners
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Trusted Partnerships</h3>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-10">
          {partnersLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))
          ) : partners && partners.length > 0 ? (
            // Marquee container: duplicate items for seamless loop
            <div className="col-span-3 md:col-span-6 w-full">
              <div className="marquee">
                <div
                  className="marquee-track w-max"
                  style={{
                    // speed: 6s per original set item; adjust multiplier as needed
                    animationDuration: `${Math.max(12, partners.length * 4)}s`,
                  }}
                >
                  {partners.map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-card rounded-xl p-3 px-5 text-center shadow-md transition-all duration-300 border border-border flex items-center justify-center gap-3"
                      style={{ minWidth: "max-content" }}
                    >
                      {partner.logo_url ? (
                        <img
                          src={partner.logo_url}
                          alt={partner.name}
                          className="w-16 h-10 object-contain"
                        />
                      ) : (
                        <div className="text-2xl">{partner.logo_emoji}</div>
                      )}
                      <span className="font-semibold text-sm whitespace-nowrap">{partner.name}</span>
                    </div>
                  ))}

                  {/* duplicate set for continuous scroll */}
                  {partners.map((partner) => (
                    <div
                      key={`${partner.id}-dup`}
                      className="bg-card rounded-xl p-3 px-5 text-center shadow-md transition-all duration-300 border border-border flex items-center justify-center gap-3"
                      style={{ minWidth: "max-content" }}
                    >
                      {partner.logo_url ? (
                        <img
                          src={partner.logo_url}
                          alt={partner.name}
                          className="w-16 h-10 object-contain"
                        />
                      ) : (
                        <div className="text-2xl">{partner.logo_emoji}</div>
                      )}
                      <span className="font-semibold text-sm whitespace-nowrap">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="col-span-6 text-center text-muted-foreground">No partners available</p>
          )}
        </div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Building className="w-5 h-5" />
            Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
