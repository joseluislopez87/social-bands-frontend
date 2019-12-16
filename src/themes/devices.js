const sizes = {
  'medium': '768px',
  'large': '1024px',
  'x-large': '1300px',
};

const device = Object.keys(sizes).reduce((acc, current) => {
  acc[current] = `(min-width: ${sizes[current]})`;
  return acc;
}, {})

export default device;