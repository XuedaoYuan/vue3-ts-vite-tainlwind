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
    extend: {
      colors: {
        // 扩展默认颜色
        'regal-blue': '#243c5a',
        'xd-red': '#ff0000'
      }
    },
    spacing: makeRange(0, 100, 1, true),
    fontSize: makeRange(0, 100, 1, true),
    borderRadius: makeRange(0, 100, 1, true)
  },
  variants: {
    extend: {}
  },
  plugins: []
};

function makeRange(start = 0, end, step = 1, hasUnit = true) {
  const range = {};
  for (let i = start; i <= end; i++) {
    range[i] = `${i * step}${hasUnit ? 'px' : ''}`;
  }
  return range;
}
