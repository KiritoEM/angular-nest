/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#3b3b3b",
        },
      },
    },
  },
  plugins: [],
};
