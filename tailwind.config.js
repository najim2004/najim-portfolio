/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
