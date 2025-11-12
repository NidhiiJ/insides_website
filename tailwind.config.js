/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Maharlika : ['Maharlika', 'regular'],
        Poppins: ['Poppins']
      },
      brightness: {
        25: '.25',
        75: '.75',
      },
      backgroundImage: {
        'contactus-image': "url('/images/contactusbg.png')",
      }
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    }
  
  },
  plugins: [],
}

