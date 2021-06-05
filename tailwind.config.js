// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(../assets/images/19.jpg)'
      })
    }
  },
  variants: {},
  plugins: []
}