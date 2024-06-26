/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: '"Rubik", sans-serif',
      },
      colors: {
        primary: "#020817",
        secondary: "#64748b",
        "primary-bg": "#FAFAFA",
        "secondary-bg": "#F8FAFC",
        "img-border": "#94A3B8",
        "box-border": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
