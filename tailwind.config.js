/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        linkFeed: 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      colors: {
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        'accent-foreground': {
          DEFAULT: 'var(--accent-foreground)',
        },
        background: {
          DEFAULT: 'var(--background)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
        },
        deluger: {
          50: 'hsl(var(--deluger-50))',
          100: 'hsl(var(--deluger-100))',
          200: 'hsl(var(--deluger-200))',
          300: 'hsl(var(--deluger-300))',
          400: 'hsl(var(--deluger-400))',
          500: 'hsl(var(--deluger-500))',
          600: 'hsl(var(--deluger-600))',
          700: 'hsl(var(--deluger-700))',
          800: 'hsl(var(--deluger-800))',
          900: 'hsl(var(--deluger-900))',
        },
      },
    },
  },
  plugins: [],
}
