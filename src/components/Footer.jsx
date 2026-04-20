import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Facebook = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Twitter = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Instagram = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Linkedin = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-20 border-t-4 border-secondary relative overflow-hidden">
      
      <div className="container-xl grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 relative z-10">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="UV Desizns" className="h-10 grayscale invert mix-blend-screen" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed pr-6">
            We are a premier interior Desizn agency crafting inspiring spaces for modern living and corporate excellence. Over 10 years of trusted legacy.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-lg"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-lg"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-lg"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-lg"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold font-heading mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
          </h4>
          <ul className="space-y-3">
            <li><NavLink to="/" className="text-white/60 hover:text-secondary transition-colors text-sm">Home</NavLink></li>
            <li><NavLink to="/about" className="text-white/60 hover:text-secondary transition-colors text-sm">About Us</NavLink></li>
            <li><NavLink to="/gallery" className="text-white/60 hover:text-secondary transition-colors text-sm">Desizn Gallery</NavLink></li>
            <li><NavLink to="/blog" className="text-white/60 hover:text-secondary transition-colors text-sm">Latest News</NavLink></li>
            <li><NavLink to="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold font-heading mb-6 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
          </h4>
          <ul className="space-y-3">
            <li><NavLink to="/services/corporate-interiors" className="text-white/60 hover:text-secondary transition-colors text-sm">Corporate Interiors</NavLink></li>
            <li><NavLink to="/services/retail-interiors" className="text-white/60 hover:text-secondary transition-colors text-sm">Retail Spaces</NavLink></li>
            <li><NavLink to="/services/commercial-interiors" className="text-white/60 hover:text-secondary transition-colors text-sm">Commercial Desizns</NavLink></li>
            <li><a href="#" className="text-white/60 hover:text-secondary transition-colors text-sm">Residential Planning</a></li>
            <li><a href="#" className="text-white/60 hover:text-secondary transition-colors text-sm">3D Visualization</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold font-heading mb-6 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-white/60 group">
              <MapPin size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="leading-relaxed">A-08, Plot No. 1, Krishna Apr D Mall, Shakti Khand 2, Indirapuram, Ghaziabad</span>
            </li>
            <li className="flex gap-3 text-sm text-white/60 group">
              <Phone size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform" />
              <a href="tel:+919557775259" className="hover:text-white transition-colors">+91 9557775259</a>, <a href="tel:+919354382176" className="hover:text-white transition-colors">+91 93543 82176</a>
            </li>
            <li className="flex gap-3 text-sm text-white/60 group">
              <Mail size={18} className="text-secondary shrink-0 group-hover:scale-110 transition-transform" />
              <a href="mailto:uvdesizns@gmail.com" className="hover:text-white transition-colors">uvdesizns@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 relative z-10 w-full mb-0 pb-0">
        <div className="container-xl h-20 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} UV Desizns Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-20 right-8 w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,168,67,0.3)] hover:-translate-y-2 hover:bg-white transition-all z-20"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="font-bold" />
      </button>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-secondary/5 rounded-[100%] blur-[120px] pointer-events-none" />
    </footer>
  );
}
