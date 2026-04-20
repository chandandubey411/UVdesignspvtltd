import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
    tagline: "Corporate Excellence",
    heading: "Desizning Workspaces That Inspire Productivity",
    sub: "Modern corporate interiors crafted for performance and brand identity",
  },
  {
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80",
    tagline: "Luxury Living",
    heading: "Transform Every Space Into a Masterpiece",
    sub: "Premium residential interiors that reflect your unique lifestyle",
  },
  {
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=2000&q=80",
    tagline: "Retail Excellence",
    heading: "Retail Spaces That Convert Visitors to Customers",
    sub: "Engaging retail environments optimized for experience and sales",
  },
];

const highlights = [
  "Advanced 3D Visualization",
  "300+ Projects Delivered",
  "10+ Years Experience",
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="h-screen relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full overflow-hidden">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center hero-bg"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl mt-24 md:mt-0"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="section-label"
            >
              Welcome to UV Desizns
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Desizning{" "}
              <span className="text-gold-gradient italic">Inspiring</span>
              <br />
              Spaces for Modern Living
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              From concept to creation — we craft interior environments that blend
              beauty, function, and your unique vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => navigate("/contact")}
                className="btn-gold"
              >
                Get Free Consultation <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="btn-outline"
              >
                View Our Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                  {h}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/50 text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
