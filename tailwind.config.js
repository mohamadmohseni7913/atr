module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'active-Color':"#ab8e66",
        'border-Color':"rgba(174, 169, 169, 0.301)"
      }
    },
    borderWidth: {
      DEFAULT: '0px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [
  ],
}
