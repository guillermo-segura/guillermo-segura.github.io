import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      flex: {
        '0-100': '0 0 100%',
      },
      padding: {
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        gblue: {
          500: '#3F96FC',
          600: '#3887E2',
          700: '#2C69B0',
        }
      },
      backgroundSize: {
        '4xl': '300%'
      },
      animation: {
        'bg-gradient': 'gradient 30s ease infinite',
      },
      backgroundImage: {
        'asfalt': "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        'carbon-fibre': "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
