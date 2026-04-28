import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImage from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Coaches", path: "/coaches" },
  { name: "Disciplines", path: "/disciplines" },
  { name: "Achievements", path: "/achievements" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-bold">
        <Zap className="inline w-4 h-4 mr-1" />
        <span>Admissions Open 2025!</span> Join Ayodhya's Premier Roller Skating Academy
        <Link to="/admission" className="ml-2 underline hover:no-underline font-bold">
          Apply Now →
        </Link>
      </div>

      {/* Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:cyan-glow transition-shadow duration-300 overflow-hidden"
              >
                <img src={logoImage} alt="The Ayodhya Skates" className="w-full h-full object-contain" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-black text-lg lg:text-xl text-foreground tracking-tight">The Ayodhya Skates</h1>
                <p className="text-xs text-muted-foreground font-medium">Roller Skating Academy</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground cyan-glow"
                      : "text-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919696575777" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 96965 75777</span>
              </a>
              <ThemeToggle />
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-haptic cyan-glow hover:scale-105 transition-transform">
                <Link to="/admission">Join Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card border-t border-white/10"
            >
              <div className="container-custom py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <ThemeToggle />
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-haptic">
                    <Link to="/admission" onClick={() => setIsOpen(false)}>
                      Join Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
