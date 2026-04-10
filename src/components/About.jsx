import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const highlights = [
    "Award-Winning Company",
    "10+ Years Experience",
    "3D Virtual Reality Tech",
    "Luxury Interior Experts"
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-xl"
        >
          <span className="uppercase tracking-widest text-[#0f2a3f] font-bold text-sm bg-blue-100/50 px-4 py-2 rounded-lg mb-6 inline-block">
             About UV Desizns
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Designing Premium Spaces with Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 text-lg">
            UV Desizns Pvt Ltd is a premier interior design company with over a decade of experience crafting luxury spaces. We specialize in transforming ordinary rooms into extraordinary environments, perfectly tailored to your unique lifestyle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Backed by our cutting-edge 3D Virtual Reality technology, our clients experience total transparency. You visualize every angle, texture, and finish of your dream space long before the first brick is laid.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-800 font-medium bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle2 className="text-yellow-600 w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/about")}
            className="bg-[#0f2a3f] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto"
          >
            Explore Our Journey
          </button>
        </motion.div>

        {/* RIGHT IMAGE COMPOSITION */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="flex flex-col sm:flex-row gap-6 items-center justify-center relative w-full h-full"
        >
           {/* Image 1 */}
           <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Interior Living Room" 
              className="w-full sm:w-1/2 h-[450px] object-cover rounded-3xl shadow-xl"
           />
           
           {/* Image 2 & Floating Card Wrapper */}
           <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:mt-24">
              <img 
                 src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                 alt="Modern Decor Detail" 
                 className="w-full h-[320px] object-cover rounded-3xl shadow-lg"
              />
              
              {/* Floating Experience Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-5 border-l-4 border-yellow-500">
                 <div className="bg-gray-50 text-[#0f2a3f] p-4 rounded-full font-bold text-3xl font-serif">
                   10+
                 </div>
                 <div>
                    <p className="font-bold text-gray-900 text-lg">Years</p>
                    <p className="text-gray-500 text-sm font-medium">Experience & Trust</p>
                 </div>
              </div>
           </div>
           
        </motion.div>
      </div>
    </section>
  );
}