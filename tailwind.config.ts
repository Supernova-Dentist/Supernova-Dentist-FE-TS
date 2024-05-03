import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        gold: 'var(--gold)',
        grey: 'var(--grey)',
        cream: 'var(--cream)',
        lightGrey: 'var(--light-grey)',
      },
      backgroundImage: {
        'team-cta':
          'linear-gradient(rgba(10, 5, 1, 0.7) 0pc, rgb(41, 196, 169) 100pc), url("/assets/images/dummy-team.jpeg")',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
