/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Mono', 'Courier', 'monospace'],
        headline: ['Mozilla Headline', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 5vw + 1rem, 4rem)',
      },
      letterSpacing: {
        tighter: '-0.05em',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
  },
  plugins: [],
}
