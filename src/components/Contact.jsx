import { motion } from "framer-motion";
import { Send, MapPin, Mail, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="py-24 bg-light relative" id="contact">
      <div className="container-xl">
        <div className="bg-white rounded-3xl overflow-hidden shadow-card grid lg:grid-cols-5 border border-gray-100">
          
          {/* Left - Contact Form */}
          <div className="p-8 md:p-12 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Get in Touch</span>
              <h2 className="text-3xl font-bold font-heading text-primary mb-2">Let's Discuss Your Project</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our design consultants will get back to you within 24 hours.</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <input type="hidden" name="access_key" value="0380dbb9-f23a-4ead-9a98-71305016edb8" />
              <input type="hidden" name="subject" value="New Inquiry from UV Desizns Website" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" name="name" id="name" required className="input-field peer" placeholder=" " />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" name="email" id="email" required className="input-field peer" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Email Address</label>
                </div>
              </div>

              <div className="relative group">
                <input type="tel" name="phone" id="phone" className="input-field peer" placeholder=" " />
                <label htmlFor="phone" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Phone Number (Optional)</label>
              </div>

              <div className="relative group">
                <textarea name="message" id="message" required rows="4" className="input-field peer resize-none" placeholder=" " />
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs pointer-events-none">Tell us about your project</label>
              </div>

              <button 
                type="submit" 
                disabled={status === "sending"}
                className="btn-navy w-full justify-center mt-4 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === "sending" ? "Sending..." : "Submit Inquiry"} 
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {status === "success" && (
                <div className="p-3 bg-green-50 text-green-600 text-sm rounded-lg border border-green-100 text-center">
                  Thank you! Your inquiry has been received.
                </div>
              )}
              {status === "error" && (
               <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 text-center">
                 Something went wrong. Please try again.
               </div>
              )}
            </form>
          </div>

          {/* Right - Contact Info & Map */}
          <div className="bg-primary text-white p-8 md:p-12 lg:col-span-2 relative overflow-hidden flex flex-col justify-between">
            {/* BG Graphic */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Office Location</p>
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">
                        A-08, Plot No. 1, Krishna Apr D Mall, <br/>
                        Shakti Khand 2, Indirapuram, Ghaziabad, 201014
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                      <PhoneCall size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Call Us</p>
                      <a href="tel:+919557775259" className="text-white/60 text-sm mt-1 hover:text-secondary transition-colors">
                        +91 9557775259
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Email Us</p>
                      <a href="mailto:uvdesizns@gmail.com" className="text-white/60 text-sm mt-1 hover:text-secondary transition-colors">
                        uvdesizns@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimap */}
            <div className="relative z-10 mt-12 h-40 w-full rounded-2xl overflow-hidden shadow-card group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4575699558322!2d77.3749702!3d28.646015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9a1ce4c505%3A0xcac8a652caa7db2f!2sUV%20Desizns%20Private%20Limited%20-%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1775640384703!5m2!1sen!2sin"
                className="w-full h-full grayscale-[1] contrast-[1.2] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }}
                loading="lazy"
                title="Office Location"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}