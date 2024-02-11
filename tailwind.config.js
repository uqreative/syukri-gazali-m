/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'hero': 'calc(100vh - 90px)',
      }
    },
  },
  plugins: [],
}

