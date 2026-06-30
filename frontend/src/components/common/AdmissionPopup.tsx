import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.jpg";
import skatingImage from "@/assets/admissionpopup.jpg";

// Module-level variable to persist across internal route changes but reset on reload/refresh
let hasShownInSession = false;

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!hasShownInSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500); // 1.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    hasShownInSession = true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          {/* Backdrop click close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden z-10"
          >
            {/* Top decorative accent bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area - Poster layout */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Header (Logos & Main Heading) */}
              <div className="relative flex flex-col items-center text-center">
                {/* Top Logos Row */}
                <div className="w-full flex items-center justify-between px-2 mb-2">
                  {/* Academy Logo */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary bg-white shadow flex items-center justify-center">
                    <img src={logoImage} alt="The Ayodhya Skates Logo" className="w-full h-full object-contain" />
                  </div>

                  {/* Circular Admission Open Badge */}
                  <div className="w-14 h-14 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground font-black text-[9px] leading-tight shadow-md border-2 border-accent animate-pulse-glow">
                    <span>ADMISSION</span>
                    <span>OPEN</span>
                  </div>
                </div>

                {/* Main Titles */}
                <div className="space-y-1">
                  <span className="block font-serif italic text-accent text-xl md:text-2xl font-semibold leading-none">
                    Explore
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight leading-none">
                    THE THRILL OF SKATING!
                  </h3>
                  <p className="text-foreground font-bold text-sm md:text-base mt-1">
                    (Training For Boys And Girls)
                  </p>
                </div>
              </div>

              {/* Middle Section - Kids Skating Image */}
              <div className="relative h-48 md:h-56 overflow-hidden rounded-xl border border-border shadow-md">
                <img 
                  src={skatingImage} 
                  alt="Kids Skating Training" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Lower Section - Text callouts */}
              <div className="text-center space-y-2">
                <h4 className="text-lg md:text-xl font-extrabold text-foreground tracking-tight">
                  “Limited Seats Available – Enroll Now!”
                </h4>
                <p className="text-sm font-semibold text-muted-foreground">
                  Home Training Also Available
                </p>
                <p className="font-serif italic text-accent text-lg md:text-xl font-bold">
                  It's Time to Skate!
                </p>
              </div>

              {/* Contact & Location Info Footer */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border text-left">
                {/* Contact side */}
                <div className="space-y-1.5">
                  <a href="tel:+919696575777" className="flex items-center gap-2 text-xs md:text-sm font-bold text-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>+91 96965 75777</span>
                  </a>
                  <a href="https://www.ayodhyaskates.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>www.ayodhyaskates.in</span>
                  </a>
                </div>

                {/* Location side */}
                <div className="flex items-start gap-2 text-xs md:text-sm text-foreground/90 font-bold leading-snug">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p>Dr BR Ambedkar Stadium</p>
                    <p className="text-muted-foreground font-semibold">Maqbra Ayodhya</p>
                  </div>
                </div>
              </div>

              {/* Button Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  onClick={handleClose}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-black h-12 rounded-xl shadow-lg cyan-glow transition-all"
                >
                  <Link to="/admission">
                    Register Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 h-12 rounded-xl font-bold border-border hover:bg-secondary/50 transition-all text-foreground"
                >
                  Maybe Later
                </Button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;
