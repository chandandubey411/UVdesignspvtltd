import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "UV Desizns completely transformed our corporate office. Their attention to detail and understanding of modern workspace dynamics is unparalleled.",
      author: "Rajesh Sharma",
      role: "CEO, TechFlow India",
      rating: 5,
    },
    {
      text: "We wanted a minimal luxury look for our home, and the team delivered beyond expectations. From materials to execution, top-notch quality.",
      author: "Priya Desai",
      role: "Homeowner",
      rating: 5,
    },
    {
      text: "Highly professional and strictly on time! The 3D Desizns matched the final outcome 100%. Highly recommend them for commercial projects.",
      author: "Amit Patel",
      role: "Retail Chain Owner",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mt-2 mb-6"
            >
              Hear From Our <br />
              <span className="text-gold-gradient italic">Happy Clients</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8 max-w-md leading-relaxed"
            >
              Don't just take our word for it. See what our valued clients have to say about their experience working with our Desizn experts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-primary">
                100+ Reviews <br />
                <span className="flex text-secondary"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></span>
              </div>
            </motion.div>
          </div>

          {/* Cards Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto"
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3000 }}
              className="w-full h-auto"
            >
              {reviews.map((r, i) => (
                <SwiperSlide key={i} className="bg-primary text-white rounded-3xl p-8 shadow-2xl border border-white/10">
                  <Quote size={40} className="text-secondary/20 mb-6" />
                  <div className="flex gap-1 text-secondary mb-6">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-8 italic">
                    "{r.text}"
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-bold font-heading text-lg text-white">{r.author}</h4>
                    <span className="text-secondary text-sm">{r.role}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
}