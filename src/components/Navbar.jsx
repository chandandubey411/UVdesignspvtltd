import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const services = [
  { name: "Corporate Interiors", slug: "corporate-interiors", icon: "🏢" },
  { name: "Retail Interiors", slug: "retail-interiors", icon: "🛍️" },
  { name: "Commercial Interiors", slug: "commercial-interiors", icon: "🏗️" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setTimeout(() => {
      setMobileOpen(false);
      setDropdown(false);
    }, 0);
  }, [location]);

  const textColor = scrolled ? "text-primary" : "text-white";
  const logoFilter = scrolled ? "mix-blend-multiply" : "grayscale invert mix-blend-screen";

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-xl flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="UV Desizns Logo"
              className={`h-10 w-auto object-contain transition-all duration-300 ${logoFilter}`}
            />
          </button>

          {/* DESKTOP MENU */}
          <ul className={`hidden lg:flex items-center gap-8 font-body font-medium text-sm ${textColor}`}>
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link transition-colors duration-200 ${isActive ? "text-secondary active" : "hover:text-secondary"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link transition-colors duration-200 ${isActive ? "text-secondary active" : "hover:text-secondary"}`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button className={`flex items-center gap-1 nav-link hover:text-secondary transition-colors duration-200 ${textColor}`}>
                Our Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${dropdown ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-primary rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 ${
                  dropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 border-l border-t border-white/10" />
                <ul className="p-3 space-y-1 relative z-10">
                  {services.map((item, i) => (
                    <li key={i}>
                      <button
                        onClick={() => navigate(`/services/${item.slug}`)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-secondary hover:bg-white/5 transition-all duration-200 text-sm text-left"
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `nav-link transition-colors duration-200 ${isActive ? "text-secondary active" : "hover:text-secondary"}`
                }
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `nav-link transition-colors duration-200 ${isActive ? "text-secondary active" : "hover:text-secondary"}`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink
              to="/contact"
              className={`nav-link text-sm font-medium transition-colors duration-200 ${textColor} hover:text-secondary`}
            >
              Contact Us
            </NavLink>
            <button
              onClick={() => navigate("/contact")}
              className="btn-gold text-sm"
            >
              Let's Talk <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-primary shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src="/logo.png" alt="UV Desizns" className="h-9 brightness-0 invert" />
            <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white">
              <X size={22} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-1">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Gallery", to: "/gallery" },
              { label: "Blog", to: "/blog" },
              { label: "Contact Us", to: "/contact" },
            ].map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? "bg-secondary text-primary" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 text-sm font-medium"
              >
                Our Services
                <ChevronDown size={15} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
              </button>
              {mobileServices && (
                <div className="ml-4 space-y-1 mt-1">
                  {services.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => navigate(`/services/${item.slug}`)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/60 hover:text-secondary hover:bg-white/5 text-sm text-left"
                    >
                      {item.icon} {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="p-6 border-t border-white/10">
            <button
              onClick={() => navigate("/contact")}
              className="btn-gold w-full justify-center"
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}