/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Roboto:['Roboto'],
        Poppins:['Poppins'],
        'Poppins-Light':['Poppins-Light'],
        'Poppins-Medium':['Poppins-Medium'],
        'Poppins-SemiBold':['Poppins-SemiBold'],
        'Poppins-Bold':['Poppins-Bold'],
        'Inter':['Inter']
      }
    },
  },
  plugins: [],
};
