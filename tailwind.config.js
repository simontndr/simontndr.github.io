/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier New', 'monospace'],
        'syncopate': ['Syncopate', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
      }
    },
    colors: {
        // Custom color names
        'royal': '#334EAC',        
        'moon': '#F7F2EB',     
        'china': '#7096D1',   
        'asian-pear': '#F2F0DE',  
        'midnight': '#081F5C',
        'dawn': '#D0E3FF',
        'jicama': '#FFF9F0',
        'midnight': '#081F5C',
        'sky': '#BAD6EB',
    },
  },
  plugins: [],
}