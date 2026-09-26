/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12141F',
        ink2: '#1B1E2C',
        citrus: '#FF8A3D',
        herb: '#6FA287',
        paper: '#F6EFE3',
        cream: '#FBF6EC',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
