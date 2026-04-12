import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/common/SectionHeader";
import founderImage from "@/assets/founder-ravinder-kumar.jpg";
import skatingTraining from "@/assets/skating-training.jpg";

const galleryImages = [
  { src: skatingTraining, alt: "Daily skating practice", title: "Daily Practice", category: "Training" },
  { src: founderImage, alt: "Founder coaching session", title: "Expert Coaching", category: "Coaching" },
  { src: null, alt: "Speed skating drill", title: "Speed Drills", category: "Training", placeholder: "🏎️" },
  { src: null, alt: "Group practice session", title: "Group Sessions", category: "Activities", placeholder: "👥" },
  { src: null, alt: "Competition preparation", title: "Competition Prep", category: "Events", placeholder: "🏆" },
  { src: null, alt: "Fun skating games", title: "Fun & Games", category: "Activities", placeholder: "🎮" },
];

const HomeGallery = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Professional diagonal texture */}
      <div className="absolute inset-0 texture-diagonal pointer-events-none" />
      <div className="absolute inset-0 texture-mesh pointer-events-none" />
      {/* Background glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Life at Ayodhya Skates"
          title="Daily Activities & Events"
          subtitle="Glimpses of training sessions, fun moments, and achievements at our academy"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl neon-card ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-square"}`}>
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary transition-colors duration-500">
                    <span className={`${index === 0 ? "text-8xl" : "text-5xl"} group-hover:scale-125 transition-transform duration-500`}>
                      {image.placeholder}
                    </span>
                  </div>
                )}
              </div>

              {/* Overlay with cyan accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6">
                <span className="inline-block w-fit px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-2">
                  {image.category}
                </span>
                <h4 className={`text-white font-bold drop-shadow-lg ${index === 0 ? "text-xl md:text-2xl" : "text-sm md:text-lg"}`}>
                  {image.title}
                </h4>
              </div>

              {/* Camera Icon with cyan glow */}
              <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cyan-glow">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all duration-300 cyan-glow hover:-translate-y-1 hover:scale-105 group btn-haptic"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallery;
