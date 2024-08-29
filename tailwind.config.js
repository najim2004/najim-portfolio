/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        primary: '"Rubik", sans-serif',
      },
      colors: {
        primary: "#020817",
        secondary: "#64748b",
        "primary-bg": "#FAFAFA",
        "secondary-bg": "#F8FAFC",
        "primary-dark": "#0F172A",
        "secondary-dark": "#1E293B",
        "img-border": "#94A3B8",
        "box-border": "#E2E8F0",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // Disable DaisyUI themes
    logs: false, // Disable console logs from DaisyUI (optional)
    darkTheme: false, // Disable dark mode handling
  },
};
