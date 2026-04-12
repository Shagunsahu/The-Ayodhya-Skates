import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import SectionHeader from "@/components/common/SectionHeader";
import { Play, X, Image, Trophy, Users, Building } from "lucide-react";
import founderImage from "@/assets/founder-ravinder-kumar.jpg";

const galleryItems = [
  { src: founderImage, alt: "Founder at skating workshop", category: "Events", title: "Founder's Workshop" },
  { src: null, alt: "Speed skating training", category: "Training", placeholder: "🏎️", title: "Speed Training" },
  { src: null, alt: "Students at competition", category: "Competitions", placeholder: "🏆", title: "State Championship" },
  { src: null, alt: "Group photo", category: "Academy", placeholder: "👥", title: "Team The Ayodhya Skates" },
  { src: null, alt: "Artistic skating performance", category: "Training", placeholder: "💃", title: "Artistic Session" },
  { src: null, alt: "Award ceremony", category: "Events", placeholder: "🎖️", title: "Award Ceremony" },
  { src: null, alt: "Practice session", category: "Training", placeholder: "⛸️", title: "Practice Time" },
  { src: null, alt: "Kids learning skating", category: "Academy", placeholder: "👶", title: "Kids Batch" },
  { src: null, alt: "Relay race training", category: "Training", placeholder: "🏃", title: "Relay Practice" },
  { src: null, alt: "Medal winners", category: "Competitions", placeholder: "🥇", title: "Medal Winners" },
  { src: null, alt: "Skating rink view", category: "Academy", placeholder: "🛹", title: "Our Rink" },
  { src: null, alt: "Coach training students", category: "Training", placeholder: "🎓", title: "Expert Coaching" },
];

const categories = ["All", "Training", "Competitions", "Events", "Academy"];

const sponsors = [
  { name: "Ayodhya Sports Authority", logo: "🏛️", type: "Government" },
  { name: "UP Skating Federation", logo: "🛼", type: "Federation" },
  { name: "Decathlon", logo: "🏪", type: "Equipment Partner" },
  { name: "Local Sports Store", logo: "🏬", type: "Retail Partner" },
];

const partners = [
  { name: "UP State Sports Council", logo: "🏅", description: "Official State Body" },
  { name: "District Sports Association", logo: "🏆", description: "District Level Support" },
  { name: "Youth Welfare Department", logo: "👥", description: "Youth Programs" },
  { name: "Ayodhya Municipal Corporation", logo: "🏙️", description: "Infrastructure Support" },
  { name: "Sports Equipment Suppliers", logo: "⛸️", description: "Quality Gear Provider" },
  { name: "Fitness & Training Academy", logo: "💪", description: "Fitness Training" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <SEO title="Photo Gallery" description="Browse photos from training sessions, competitions, and events at The Ayodhya Skates academy. See our students in action." path="/gallery" />
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-6">
              <Image className="inline w-4 h-4 mr-2" />
              Our Memories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Capturing moments of learning, growth, and victory at The Ayodhya Skates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {image.placeholder}
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white font-semibold text-sm">{image.title}</span>
                  <span className="text-white/70 text-xs">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-20">
            <SectionHeader
              badge="Videos"
              title="Watch Us in Action"
              subtitle="Training sessions, competitions, and memorable moments"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Training Highlights", duration: "3:45" },
                { title: "State Competition 2024", duration: "5:20" },
                { title: "Student Testimonials", duration: "4:15" },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{video.title}</p>
                    <p className="text-white/70 text-sm">{video.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Sponsors"
            title="Proudly Sponsored By"
            subtitle="Organizations that support our mission of excellence in skating"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="text-5xl mb-4">{sponsor.logo}</div>
                <h4 className="font-bold text-foreground mb-1">{sponsor.name}</h4>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {sponsor.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Our Partners"
            title="Trusted Partnerships"
            subtitle="Working together to build champions"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h5 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                  {partner.name}
                </h5>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary to-accent p-6 sm:p-8 rounded-2xl text-white">
              <Building className="w-12 h-12" />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold mb-1">Become a Partner</h4>
                <p className="text-white/80 text-sm">
                  Join us in nurturing the next generation of skating champions
                </p>
              </div>
              <a
                href="/contact"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[80vh] text-center">
            {selectedImage.src ? (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center text-9xl">
                {selectedImage.placeholder}
              </div>
            )}
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
