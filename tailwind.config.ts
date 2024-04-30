import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/**/*.{ts,tsx}',
    flowbite.content(),
  ],
  theme: {
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
  plugins: [flowbite.plugin()],
} satisfies Config;
