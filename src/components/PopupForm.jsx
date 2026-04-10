import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Check if popup was already closed in this session
    const hasSeenPopup = sessionStorage.getItem("uv_popup_closed");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800); // 1.8 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Disable background scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("uv_popup_closed", "true");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const dataString = new FormData();
    dataString.append("access_key", "0380dbb9-f23a-4ead-9a98-71305016edb8");
    dataString.append("name", formData.name);
    dataString.append("email", formData.email);
    dataString.append("phone", formData.phone);
    dataString.append("subject", "Popup Form Inquiry - UV Desizns");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataString,
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass = "w-full border-none focus:outline-none focus:ring-2 placeholder-gray-400 bg-white px-4 py-3.5 rounded-lg text-sm text-gray-800 transition-shadow";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-full max-w-[440px] relative overflow-hidden"
            style={{ backgroundColor: "#f5f5f5", borderRadius: "1.25rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          >
            {/* Close Cross */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-200/50 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
              aria-label="Close popup"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Header Content */}
            <div className="pt-10 pb-6 px-8 text-center border-b border-gray-200/50">
              <h3 className="text-2xl font-bold font-serif text-gray-900 tracking-tight">
                Talk to Our Top Designers
              </h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Schedule a consultation and let us transform your space into a masterpiece.
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Full Name"
                    className={inputClass}
                    style={{ ringColor: "#0f2a3f" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Mobile No."
                    className={inputClass}
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full text-white font-semibold py-4 rounded-lg transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-none"
                    style={{ backgroundColor: "#0f2a3f" }}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-600 text-sm font-medium text-center bg-green-50 py-2 rounded-lg mt-4 animate-pulse">
                    Thank you! We will be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium text-center bg-red-50 py-2 rounded-lg mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
