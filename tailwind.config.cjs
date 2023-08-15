/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate', 'prettier-plugin-tailwindcss'),
    plugin(function ({ addUtilities, addComponents }) {
      const scrollBar = {
        '.scrollbar-light': {
          '&::-webkit-scrollbar': {
            width: '8px',
            zIndex: '50',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F4F4F5',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#cccccc',
            borderRadius: '24px',
          },
        },
        '.scrollbar-dark': {
          '&::-webkit-scrollbar': {
            width: '8px',
            zIndex: '50',
          },
          '&::-webkit-scrollbar-track': {
            background: '#09090B',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#6f7782',
          },
        },
      }

      const newUtilities = {
        '.balance': {
          'text-wrap': 'balance',
        },
      }

      addUtilities(newUtilities)
      addComponents(scrollBar, {
        variants: ['responsive', 'hover'],
      })
    }),
  ],
}
