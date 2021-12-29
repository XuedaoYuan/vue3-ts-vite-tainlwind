/* module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
 */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
    spacing: makeRange(0, 100, 1)
  },
  variants: {
    extend: {}
  },
  plugins: []
};

function makeRange(start = 0, end, step = 1, hasUnit = true) {
  const range = {};
  for (let i = start; i <= end; i++) {
    range[i] = `${i * step}${hasUnit ? 'px': ''}`;
  }
  return range;
}
