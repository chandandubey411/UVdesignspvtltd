/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c1f2e",       // deep navy
        secondary: "#d4a843",     // gold
        accent: "#1a3a52",        // mid navy
        light: "#f8f6f1",         // warm off-white
        dark: "#070f17",          // near black
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "zoom-in": "zoomIn 8s ease forwards",
        "slide-left": "slideLeft 0.7s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4a843, #f5d07a, #d4a843)",
        "navy-gradient": "linear-gradient(135deg, #0c1f2e, #1a3a52)",
      },
      boxShadow: {
        "gold": "0 4px 30px rgba(212, 168, 67, 0.25)",
        "card": "0 8px 40px rgba(0,0,0,0.10)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.18)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
}