import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { num: 300, suffix: "+", label: "Projects Completed" },
  { num: 10, suffix: "+", label: "Team Experts" },
  { num: 10, suffix: "+", label: "Years Experience" },
];

function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <div ref={nodeRef} className="flex justify-center items-end relative overflow-hidden pb-1">
      <span className="text-5xl md:text-6xl font-black font-heading text-white">{count}</span>
      <span className="text-3xl md:text-5xl font-bold text-secondary mb-1">{suffix}</span>
      {/* Reflection effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 mix-blend-overlay pointer-events-none animate-shimmer" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative bg-primary">
      {/* Background Pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), repeating-linear-gradient(45deg, #fff 25%, #0c1f2e 25%, #0c1f2e 75%, #fff 75%, #fff)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px'}} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`text-center ${i % 2 === 0 ? "border-l-0" : ""} sm:border-l-0 md:border-l first:border-l-0`}
            >
              <Counter end={s.num} suffix={s.suffix} />
              <p className="text-white/60 font-medium text-sm mt-3 uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}