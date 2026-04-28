import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/common/SectionHeader";
import gallery1 from "@/assets/1.jpg";
import gallery2 from "@/assets/2.jpg";
import gallery3 from "@/assets/3.jpg";
import gallery4 from "@/assets/4.jpg";
import gallery5 from "@/assets/5.jpg";
import gallery6 from "@/assets/6.jpg";
import heroImage1 from "@/assets/hero-image-1.jpg";
import heroImage2 from "@/assets/hero-image-2.jpg";
import heroImage3 from "@/assets/hero-image-3.jpg";

const galleryImages = [
  { src: gallery1, alt: "Ayodhya Skates gallery image 1", title: "Training Moment", category: "Training" },
  { src: gallery2, alt: "Ayodhya Skates gallery image 2", title: "On Track", category: "Practice" },
  { src: gallery3, alt: "Ayodhya Skates gallery image 3", title: "Focus Drill", category: "Coaching" },
  { src: gallery4, alt: "Ayodhya Skates gallery image 4", title: "Team Session", category: "Activities" },
  { src: gallery5, alt: "Ayodhya Skates gallery image 5", title: "Speed Work", category: "Training" },
  { src: gallery6, alt: "Ayodhya Skates gallery image 6", title: "Warm Up", category: "Practice" },
  { src: heroImage1, alt: "Ayodhya Skates hero image 1", title: "Academy Hero", category: "Highlights" },
  { src: heroImage2, alt: "Ayodhya Skates hero image 2", title: "Momentum", category: "Highlights" },
  { src: heroImage3, alt: "Ayodhya Skates hero image 3", title: "Together", category: "Highlights" },
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
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
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
