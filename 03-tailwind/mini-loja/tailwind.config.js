// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'bg-menu': '#217FD1',
        'bg-light': '#FFFFFF',
        'text-dark': '#444444',
        'secondary': '#2563eb',
        'card-bg': '#1f2937',
        'alert': '#F94343',
      },
      fontFamily: {
        base: ['Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
