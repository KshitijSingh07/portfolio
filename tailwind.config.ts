import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // dark mode will work via `class="dark"`
  theme: {
    extend: {
       colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        secondary: 'var(--color-sec)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
