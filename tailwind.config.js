/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F38FF',
          deep: '#0A28C9',
          lime: '#CDFF00',
          limedark: '#B8E600',
          ink: '#0B0B14',
          muted: '#6B7280',
          light: '#F6F6F7',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(15,56,255,0.08)',
        float: '0 16px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
