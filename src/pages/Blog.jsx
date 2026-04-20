import { motion } from "framer-motion";
import { ArrowRight, Search, Calendar, ChevronRight } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      title: "6 Smart Ideas to Desizn Productive Co-working Spaces",
      date: "April 7, 2026",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      desc: "Modern co-working environments demand flexibility, creativity, and comfort. Discover ideas that help create inspiring and efficient shared spaces which boost focus and collaboration seamlessly.",
      category: "Workspace Desizn"
    },
    {
      title: "How Office Layout Impacts Employee Performance",
      date: "March 17, 2026",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      desc: "A well-Desizned office can boost productivity and morale. Learn how layout, lighting, and materials affect work efficiency directly.",
      category: "Corporate Interiors"
    },
    {
      title: "The Rise of Biophilic Desizn in Urban Homes",
      date: "February 22, 2026",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      desc: "Bringing nature indoors isn't just a trend. Explore how integrating natural elements into your living space can reduce stress and increase well-being.",
      category: "Residential Interiors"
    }
  ];

  const categories = [
    "Workspace Desizn",
    "Residential Interiors",
    "Commercial Spaces",
    "Desizn Trends",
    "Lighting & Ambience"
  ];

  const tags = [
    "Corporate", "Retail", "Smart Home", "Minimalism", "Luxury", "Ergonomics"
  ];

  return (
    <div className="bg-light">

      {/* HERO */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="container-xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-heading-white mb-4"
          >
            Desizn <span className="text-gold-gradient italic">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Stay updated with the latest trends, tips, and inspirations in interior Desizn architecture.
          </motion.p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24">
        <div className="container-xl grid lg:grid-cols-3 gap-12 items-start">
          
          {/* BLOG LIST */}
          <div className="lg:col-span-2 space-y-12">
            {blogs.map((blog, i) => (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                key={i}
                className="bg-white rounded-3xl shadow-card overflow-hidden group border border-gray-100"
              >
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-primary font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {blog.category}
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 font-medium">
                    <Calendar size={16} />
                    {blog.date}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>

                  <button className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group/btn">
                    Read Full Article 
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}

            {/* Pagination */}
            <div className="flex gap-2 justify-center pt-8">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                    num === 1
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="w-12 h-12 rounded-full font-bold transition-all duration-300 bg-white text-gray-500 hover:bg-gray-100 border border-gray-200 flex items-center justify-center">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-10 lg:sticky lg:top-32">
            
            {/* Search */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Search</h3>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-light border border-transparent focus:border-secondary focus:bg-white rounded-xl py-4 pl-5 pr-12 text-sm outline-none transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-secondary transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button className="w-full flex items-center justify-between text-gray-600 hover:text-secondary transition-colors font-medium">
                      {cat}
                      <ChevronRight size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-light border border-transparent hover:border-secondary hover:bg-white text-sm text-gray-600 hover:text-primary rounded-xl cursor-pointer transition-all font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Wrapper */}
            <div className="bg-primary rounded-3xl shadow-gold p-8 relative overflow-hidden">
               {/* Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">Join Our Newsletter</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">Get weekly updates on the finest interior Desizn trends.</p>
                <form className="relative group">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/20 focus:border-secondary focus:bg-white/20 text-white placeholder-white/50 rounded-xl py-4 pl-5 pr-14 text-sm outline-none transition-all"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary hover:bg-white hover:-translate-y-1/2 transition-all shadow-md">
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}