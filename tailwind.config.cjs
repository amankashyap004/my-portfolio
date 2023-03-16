/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         md: { max: "850px" },
         sm: { max: "639px" },
      },
   },
   darkMode: "class",
   plugins: [],
};
