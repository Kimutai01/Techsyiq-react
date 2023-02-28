/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
      },
      transform: {
        45: "rotate(45deg)",
      },
    },
  },
  variants: {
    transform: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
