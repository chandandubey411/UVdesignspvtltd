import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { useRef } from "react";

const projects = [
  { img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80", title: "Luxury Penthouse", category: "Residential" },
  { img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80", title: "Tech Hub Office", category: "Corporate" },
  { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", title: "Boutique Hotel", category: "Commercial" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", title: "Modern Villa", category: "Residential" },
];

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-xl relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mt-2"
            >
              Featured <span className="text-gold-gradient italic">Projects</span>
            </motion.h2>
          </div>

          {/* Custom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button ref={prevRef} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button ref={nextRef} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors bg-light">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="-mr-4 sm:-mr-6 lg:-mr-8 pr-4 sm:pr-6 lg:pr-8" /* Allow overflow on right */
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} className="py-4">
                <div className="relative h-[450px] rounded-2xl overflow-hidden group shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                    <Eye size={24} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-secondary font-semibold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase tracking-widest">
                      {project.category}
                    </p>
                    <h3 className="text-white text-2xl font-bold font-heading">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}