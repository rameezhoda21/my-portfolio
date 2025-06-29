module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        accent: '#c084fc',
      },
      spacing: { '28': '7rem', '32': '8rem' },
      zIndex: { '-10': '-10' },
    },
  },
  plugins: [],
};
