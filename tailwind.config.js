/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-regular": ["Roboto Regular"],
        "roboto-medium": ["Roboto Medium"],
        "roboto-bold": ["Roboto Bold"],
        "roboto-thin": ["Roboto Thin"],
        "roboto-black": ["Roboto Black"],
      },
    },
  },
  plugins: [],
};
