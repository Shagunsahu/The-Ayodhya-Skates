import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center transition-all duration-200 ${
            isClicked ? "bg-[#FF3B3B] shadow-[0_0_20px_rgba(255,59,59,0.5)]" : "hover:bg-primary/90"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
