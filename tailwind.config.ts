import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        gold: 'var(--gold)',
        grey: 'var(--grey)',
        cream: 'var(--cream)',
        lightGrey: 'var(--light-grey)',
      },
      backgroundImage: {
        'team-cta':
          'linear-gradient(rgba(10, 5, 1, 0.7) 0pc, rgb(41, 196, 169) 100pc), url("/assets/images/dummy-team.jpeg")',
        'meet-dr-young':
          'linear-gradient(rgba(10, 5, 1, 0.7) 0pc, rgb(41, 196, 169) 100pc), url("/assets/images/meet-dr-young.jpeg")',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
