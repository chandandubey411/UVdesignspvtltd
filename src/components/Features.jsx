import { motion } from "framer-motion";
import { MonitorPlay, Leaf, ShieldCheck, Clock, Activity, Layers } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Immersive Design Tech",
    desc: "Experience your future space before it's built with 3D modeling and VR walkthroughs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Planning",
    desc: "We integrate sustainable materials and energy-efficient designs into every project.",
  },
  {
    icon: ShieldCheck,
    title: "Post-Delivery Support",
    desc: "Our commitment doesn't end at handover. We provide reliable after-sales maintenance.",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    desc: "Strict adherence to project timelines through robust management protocols.",
  },
  {
    icon: Activity,
    title: "Live Project Tracking",
    desc: "Stay updated with real-time progress reports and transparent milestone tracking.",
  },
  {
    icon: Layers,
    title: "Structured Workflow",
    desc: "Streamlined processes ensuring quality consistency from conception to completion.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            The UV Advantage
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
            className="section-heading mt-4"
          >
            Why We Are Different
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="p-8 rounded-2xl bg-light border border-gray-100 hover:border-secondary/20 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <item.icon size={26} />
              </div>
              <h3 className="font-bold font-heading text-xl text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}