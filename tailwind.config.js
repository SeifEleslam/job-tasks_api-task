/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        prim: "var(--primary-color)",
        sec: "var(--secondary-color)",
      },
      boxShadow: {
        g: "0 2px 8px 0 rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.05);",
      },
    },
  },
  plugins: [],
};
