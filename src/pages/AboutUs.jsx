import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-light">
      
      {/* Page Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="container-xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading-white mb-4"
          >
            About <span className="text-gold-gradient italic">UV Desizns</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Crafting inspiring spaces that elevate human experiences through innovative design and meticulous execution.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Story</span>
            <div className="gold-divider" />
            <h2 className="text-4xl font-heading font-bold text-primary mb-6 leading-tight">
              A Legacy of Design <br className="hidden md:block"/> Excellence
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At UV Desizns Pvt Ltd, we specialize in creating interiors that blend creativity, practicality, and elegance. Our team is passionate about transforming ordinary spaces into extraordinary experiences that reflect personality, purpose, and modern lifestyle needs.
              </p>
              <p>
                From conceptual design to final execution, we focus on quality, detail, and innovation. Every project is an opportunity to craft a meaningful space that enhances comfort, productivity, and aesthetics.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Innovative Approaches",
                "Sustainable Practices",
                "Client-Centric Process",
                "Flawless Execution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 size={20} className="text-secondary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" alt="Interior" className="rounded-3xl w-full h-64 object-cover mt-12 shadow-card" />
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80" alt="Interior" className="rounded-3xl w-full h-64 object-cover shadow-card" />
            </div>
            {/* decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[500px]"
          >
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Mission" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="section-label">Our Philosophy</span>
            <div className="gold-divider" />
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">Our Mission & Vision</h2>
            
            <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-secondary pl-6 mb-8">
              "Our mission is to design spaces that inspire, function seamlessly, and stand the test of time."
            </p>

            <p className="text-gray-600 leading-relaxed">
              We combine creativity with smart planning to deliver environments that elevate everyday living and working experiences. Every design we create is rooted in innovation, sustainability, and attention to detail. We envision a world where interior spaces proactively adapt to human needs.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats reused */}
      <Stats />

      {/* Contact reused */}
      <Contact />

    </div>
  );
}