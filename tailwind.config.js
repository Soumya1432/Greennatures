/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      marcellus: ['Marcellus', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
  },
  
    extend: {
      colors: {
        primary: '#1E481F',       // Primary color
        primaryLight: '#1E481F',  // If you have a lighter version of the primary color, adjust this.
        textPrimary: '#0F172A',   // Primary text color
        lightText: '#777777',     // Light text color
        background: '#F6F6F6',    // Background color
    },
    screens:{
      xs:'360px'
    }

    },
  },
  plugins: [],
}

