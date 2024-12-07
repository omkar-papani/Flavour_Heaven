/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBrown:'#646340',
        bgColor:'#F2F2E6',
        darkbg:'#E0E0C7',
        navcolor:'#8B4513'
      }
    },
  },
  plugins: [],
}

