import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-light">
      
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="container-xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading-white mb-4"
          >
            Contact <span className="text-gold-gradient italic">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            We are ready to bring your vision to life. Reach out today for a consultation.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section - reusing the powerful component built earlier */}
      <Contact />

    </div>
  );
}