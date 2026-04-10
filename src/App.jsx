import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Navbar (visible on all pages) */}
      <Navbar />

      {/* Routes */}
      <main className="min-h-screen">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Dynamic Service Page */}
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* Optional: fallback route */}
          <Route
            path="*"
            element={
              <div className="h-screen flex flex-col items-center justify-center bg-light">
                <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
                <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-navy">Return Home</a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}