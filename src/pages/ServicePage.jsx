import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import services from "../data/services.json";
import Contact from "../components/Contact";

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-light">
        <h1 className="text-4xl font-bold font-heading text-primary mb-4">Service Not Found</h1>
        <button onClick={() => navigate("/")} className="btn-outline">Return Home</button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="page-hero-overlay bg-primary/70" />
        <div className="container-xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-heading-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-xl">
          
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-secondary mb-12 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Services
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Overview</span>
              <div className="gold-divider" />
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Expert Solutions for Your {service.title} Needs</h2>
              
              <div className="text-gray-600 leading-relaxed text-lg mb-8">
                {service.content}
              </div>

              <div className="bg-light p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold font-heading text-primary mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {["Enhanced aesthetics and functionality", "Optimized layout for ideal traffic flow", "Premium material selection & sourcing", "Dedicated project manager from start to finish"].map((ben, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                      {ben}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="rounded-3xl overflow-hidden shadow-card relative group">
                <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gold-gradient opacity-0 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

    </div>
  );
}