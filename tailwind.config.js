/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: '#2B78E4',
        warning: '#F2AC57',
        success: '#14A38B',
        error: '#FF7171',
        primary: '#323232',
        secondary: '#756F86',
        bgbody: '#FFF',
        shadowbox: '#B2B8BE',
      },
      spacing: {
        cartTop: 'calc(50% - 8.5px)',
        cartLeft: 'calc(50% - 6.5px)',
      },
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      '2xs': '520px',
      // => @media (min-width: 520px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [],
}
