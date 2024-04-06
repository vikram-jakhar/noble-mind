/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        btn: "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
        btn2: "linear-gradient(130.88deg, #fff -9.14%, #0000 283.16%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Outfit: "Outfit, sans-serif",
        Exo: "Exo\\ 2, sans-serif",
      },
    },
  },
  plugins: [],
};
// / @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages//.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/.{js,ts,jsx,tsx,mdx}",
//     "./src/app/*/.{js,ts,jsx,tsx,mdx}",
//   ],

//   theme: {
//     extend: {
//       backgroundImage: {
//         btn: "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
//       },
//       fontFamily: {
//         Montserrat: "Montserrat, sans-serif",
//         Outfit: "Outfit, sans-serif",
//         Exo: "Exo\ 2, sans-serif",
//       },
//     },
//   },
//   plugins: [],
// };