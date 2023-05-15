/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main': '#00F8DA',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        JetBrains: ["JetBrains Mono", "monospace"],
       },
    },
  },
  plugins: [],
}

