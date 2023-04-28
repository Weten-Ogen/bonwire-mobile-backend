/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  

theme: {
  extend: {
    colors:{
      socialBg:'#F5F7FB',
        socialBlue: '#218DFA',
        socialBlue5: '#308EFB',
      },
      screens: {
        xs:'388px'
      },
      variants:{
        backgroundColor:['active'],
      },
     
    },
  },
  plugins: [],
}
