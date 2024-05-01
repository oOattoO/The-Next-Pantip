import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Kanit'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        purple: {
          500: '#3c3963',
          900: '#2d2a49',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
