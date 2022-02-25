/* eslint-disable global-require */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      maxWidth: {
        1: '180px',
        2: '400px',
        3: '420px',
        4: '130px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/line-clamp'),
  ],

};
