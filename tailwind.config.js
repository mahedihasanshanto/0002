/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],                                     
      },
    },
  },
  plugins: [require("daisyui")],
}

 
    
 

