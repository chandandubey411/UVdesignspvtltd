import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Building2, Store, Briefcase } from "lucide-react";

const services = [
  {
    title: "Corporate Interiors",
    desc: "We Desizn professional workspaces that enhance productivity, reflect brand identity, and create a comfortable environment for your teams to thrive.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: Building2,
    slug: "corporate-interiors",
  },
  {
    title: "Retail Interiors",
    desc: "Our retail Desizns focus on customer experience, optimizing layout and aesthetics to attract, engage, and convert visitors into loyal customers.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    icon: Store,
    slug: "retail-interiors",
  },
  {
    title: "Commercial Interiors",
    desc: "We create functional and visually appealing commercial spaces that balance Desizn, efficiency, and user comfort for long-term success.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
    slug: "commercial-interiors",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container-xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            What We Offer
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="gold-divider mx-auto"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-heading-white mt-4"
          >
            Comprehensive <span className="text-gold-gradient italic">Interior</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 mt-6 text-lg"
          >
            Delivering tailored solutions that elevate human experiences and maximize space functionality.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-gold hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={24} className="text-primary" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                
                <div className="flex items-center text-secondary font-semibold text-sm group/btn mt-auto">
                  <span className="relative overflow-hidden">
                    <span className="block group-hover/btn:-translate-y-full transition-transform duration-300">Explore Service</span>
                    <span className="absolute inset-0 block translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">Explore Service</span>
                  </span>
                  <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}