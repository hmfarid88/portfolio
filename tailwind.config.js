/** @type {import('tailwindcss').Config} */


export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
];
// eslint-disable-next-line no-undef
export const plugins = [require("@tailwindcss/typography"), require('daisyui')];

export default {
  
  theme: {
    extend: {
      fontFamily:{
        bodyFont:["Roboto", "sans-serif"],
      },
      colors: {
        'primaryColor': '#212428',
        'lightText':'#878e99',
        'designColor':'#ff014f',
      },
    },
  },

} 


