import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lizzy-violet': '#8A21C4',
        'lizzy-violet-65': '#B36FD9',
        'lizzy-violet-10': '#F3E9F9',
        'lizzy-blue': '#25A7FF',
        'lizzy-blue-65': '#71C6FF',
        'lizzy-blue-10': '#E9F6FF',
        'lizzy-black': '#0E1013',
        'lizzy-black-65': '#616368',
        'lizzy-black-35': '#ABABAC',
        'lizzy-black-10': '#E7E7E7',
        'lizzy-black-5': '#F3F3F3',
        'lizzy-black-2': '#FAFAFA',
        'lizzy-error': '#EF3D3D',
        'lizzy-success': '#4EEA70',
        'lizzy-warn': '#F8BB20',
      },
      boxShadow: {
        '3xl': '0 -2px 30px 0 rgba(0,0,0,0.15)'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

