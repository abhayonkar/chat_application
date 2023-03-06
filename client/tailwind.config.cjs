/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/*.jsx"
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/home/abhay/chat_app/client/download_16x9.png')"
      }
    },
  },
  plugins: [],
}
