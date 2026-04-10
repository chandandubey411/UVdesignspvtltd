import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const badges = [
  { icon: Award, label: "Award Winning" },
  { icon: Users, label: "100+ Clients" },
  { icon: Clock, label: "10+ Years" },
  { icon: Star, label: "5 Star Rated" },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="container-xl grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGES */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=900&q=80"
              alt="Luxury interior design"
              loading="lazy"
              className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          {/* Floating Small Image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-6 w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
          >
            <img
              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80"
              alt="Interior detail"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Experience Badge */}
          <div className="absolute -left-4 top-8 bg-secondary rounded-2xl px-6 py-5 shadow-gold">
            <p className="text-4xl font-bold font-heading text-primary leading-none">10+</p>
            <p className="text-primary/80 text-xs font-semibold mt-1 uppercase tracking-wider">Years of<br />Excellence</p>
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-8 pt-8 md:pt-0">
          <motion.div {...fadeUp(0.2)}>
            <span className="section-label">About Us</span>
            <div className="gold-divider" />
            <h2 className="section-heading mt-2">
              Crafting Spaces That
              <span className="text-gold-gradient italic"> Inspire</span>
              <br />Everyday Living
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.35)} className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              At <strong className="text-primary">UV Desizns Pvt Ltd</strong>, we believe every space
              tells a story. Our approach blends creativity, functionality, and modern design
              principles to deliver environments that are not just beautiful — but deeply personal.
            </p>
            <p>
              From concept to execution, we push boundaries with advanced 3D visualization,
              sustainable materials, and meticulous attention to every detail, ensuring your vision
              comes to life exactly as you imagined.
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div {...fadeUp(0.45)} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-card border border-gray-100 hover:border-secondary/30 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Icon size={18} className="text-secondary" />
                </div>
                <span className="text-xs font-semibold text-primary text-center">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.55)}>
            <button onClick={() => navigate("/about")} className="btn-navy">
              Discover Our Story <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}