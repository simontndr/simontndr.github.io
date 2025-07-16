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