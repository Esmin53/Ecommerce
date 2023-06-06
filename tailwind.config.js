/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      mainorange: "#ff725c",
      mainpink: "#FFA3A7",
      red: " #F44336",
      white: "#fff",
      offwhite: "#f8f8ff",
      offwhite_100: "#edf2f4",
      offwhite_200: "#778da9",
      lightgray: "#d3d3d3",
      black: "#121213",
      secondarywhite: "#f4f4f5"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        form_lg: "32rem"
      },

    },
  },
  plugins: [],
}
