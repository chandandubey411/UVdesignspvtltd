import { motion } from "framer-motion";

export default function Trusted() {
  const companies = [
    { name: "Freecharge", logo: "/logos/freecharge.png" },
    { name: "BHEL", logo: "/logos/bhel.png" },
    { name: "Pearson", logo: "/logos/pearson.png" },
    { name: "Wipro", logo: "/logos/wipro.png" },
    { name: "Arvato", logo: "/logos/arvato.png" },
    { name: "Avanta", logo: "/logos/avanta.png" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container-xl text-center">
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-8"
        >
          Trusted by Industry Leaders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70"
        >
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}