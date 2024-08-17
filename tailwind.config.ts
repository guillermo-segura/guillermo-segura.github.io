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
        primary: {
          400: '#78B5FC',
          500: '#3F96FC',
          600: '#2C69B0',
        },
        secondary: {
          500: '#FF854D',
        },
        dark: {
          500: '#37383F',
        }
      },
      boxShadow: {
        "inner-xl": 'inset 0px -12px 8px -10px rgba(0,0,0,0.1),inset 0px 12px 8px -10px rgba(0,0,0,0.1)',
        "card": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        "polaroid": "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px",
      },
      backgroundSize: {
        '4xl': '300%'
      },
      animation: {
        'bg-gradient': 'gradient 15s ease infinite',
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
