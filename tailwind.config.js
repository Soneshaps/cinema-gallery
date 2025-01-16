/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'title-4': ['2.125rem', { fontWeight: 500, lineHeight: '1.235', letterSpacing: '0.00735em' }],
        'title-5': ['1.875rem', { fontWeight: 500, lineHeight: '1.235', letterSpacing: '0.00735em' }],
      },
      screens: {
        sm: '640px',
        md: '900px',
        lg: '1200px',
        xl: '1400px',
      },
    },
  },
  plugins: [],
}
