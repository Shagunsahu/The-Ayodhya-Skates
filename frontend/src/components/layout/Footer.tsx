import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, FileText } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src={logoImage} alt="The Ayodhya Skates" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-xl">The Ayodhya Skates</h3>
                <p className="text-sm text-background/70">Roller Skating Academy</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Training champions since 2015. Ayodhya's premier roller skating academy preparing athletes for district, state, and national level competitions.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Coaches", path: "/coaches" },
                { name: "Disciplines", path: "/disciplines" },
                { name: "Achievements", path: "/achievements" },
                { name: "Events", path: "/events" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/80 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Disciplines</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li>Speed Skating</li>
              <li>Artistic Skating</li>
              <li>Roller Hockey</li>
              <li>Freestyle Skating</li>
              <li>Inline Skating</li>
              <li>Quad Skating</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>RTO Office, Near Transport Nagar, Ayodhya, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919696575777" className="hover:text-primary transition-colors">+91 96965 75777</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:ayodhyaskates.info@gmail.com" className="hover:text-primary transition-colors">ayodhyaskates.info@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/80">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Morning: 5:30 AM - 9:00 AM</p>
                  <p>Evening: 5:00 PM - 6:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documentary Link */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4 text-center">
          <a 
            href="/documents/Ayodhya_Skates_Documentary.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            View Our Documentary (PDF)
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2025 The Ayodhya Skates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
