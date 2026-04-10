import { motion } from "framer-motion";
import { Shield, Sparkles, Clock, Target, Users, ThumbsUp, CheckCircle2 } from "lucide-react";
import Contact from "../components/Contact";

export default function AboutUs() {
  const whyUs = [
    { icon: <Shield size={28} />, title: "Integrity", desc: "We operate with total transparency and honesty in every project phase." },
    { icon: <Users size={28} />, title: "Collaborative", desc: "Working hand-in-hand with clients to match their absolute vision." },
    { icon: <Clock size={28} />, title: "Reliable", desc: "On-time delivery without ever compromising on our premium quality." },
    { icon: <Sparkles size={28} />, title: "Innovative", desc: "Leveraging 3D VR tech to modernize the interior design experience." },
    { icon: <ThumbsUp size={28} />, title: "Customer-Centric", desc: "Your satisfaction and peace of mind is our highest priority." },
    { icon: <Target size={28} />, title: "Efficient", desc: "Optimizing all workflows to ensure cost-effective luxury." },
  ];

  const stats = [
    { num: "300+", label: "Projects Completed" },
    { num: "100+", label: "Happy Clients" },
    { num: "10+", label: "Years Experience" },
    { num: "10+", label: "Master Designers" },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2a3f]/80 to-[#0f2a3f]/60 backdrop-blur-[2px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            About Us
          </h1>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
        <motion.div
           initial={{ opacity: 0, x: -30 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif font-bold text-[#0f2a3f] mb-6 leading-tight">
            Interior Designers Transforming Spaces with Style
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed text-lg">
            <strong>UV Desizns Pvt Ltd</strong> is an award-winning interior design 
            company based in Delhi NCR, established in 2014. With over 
            <strong> 10+ years of experience</strong>, we have delivered extraordinary projects 
            across major cities in India, creating premium residential and commercial spaces.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            We specialize in luxury interiors powered by our patented 
            <strong> 3D Virtual Reality technology</strong>, helping clients 
            visualize their dream spaces before execution.
          </p>

          <div className="space-y-4 text-gray-800 font-medium">
            {[
              "Smart & Creative Designs",
              "100% Transparent Pricing",
              "Guaranteed On-time Delivery",
              "Premium Quality Finishes"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-yellow-600 flex-shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* IMAGES */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative flex flex-col sm:flex-row gap-6 items-center justify-center w-full h-full"
        >
           <img 
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Office Interior" 
              className="w-full sm:w-1/2 h-[400px] object-cover rounded-3xl shadow-xl"
           />
           
           <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:mt-24">
              <img 
                 src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80" 
                 alt="Luxury Decor Concept" 
                 className="w-full h-[300px] object-cover rounded-3xl shadow-lg border-4 border-white"
              />
              
              <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center gap-5 border border-gray-100">
                 <div className="text-yellow-500 font-serif font-bold text-4xl">
                   10+
                 </div>
                 <div className="text-left">
                    <p className="font-bold text-[#0f2a3f]">Years</p>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Experience</p>
                 </div>
              </div>
           </div>
        </motion.div>

      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]"
           >
             <img
               src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
               alt="Our Mission Workspace"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3f]/80 to-transparent" />
             <h2 className="absolute bottom-10 left-10 text-4xl font-serif font-bold text-white">Our Mission</h2>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100"
           >
             <div className="w-16 h-2 bg-yellow-500 mb-8 rounded-full" />
             <p className="text-gray-600 leading-relaxed text-lg mb-6">
               Our mission at UV Desizns is to create spaces that are fiercely functional, enduringly elegant, and fully future-ready. 
             </p>
             <p className="text-gray-600 leading-relaxed text-lg">
               We blend raw creativity with modern technology to deliver stunning designs that enhance everyday living and professional working experiences, ensuring that the highest standards of architectural quality are met every single time.
             </p>
           </motion.div>
           
         </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-[#0f2a3f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="bg-[#16354d] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0f2a3f] rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                   {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto px-6">
          {stats.map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="p-6"
            >
              <h2 className="text-5xl font-serif font-bold text-[#0f2a3f] mb-3">
                {item.num}
              </h2>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />

    </div>
  );
}