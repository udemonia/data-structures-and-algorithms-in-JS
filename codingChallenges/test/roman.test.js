const roman = require('../romanNumeralConverter');

// eslint-disable-next-line no-undef
test('LVIII === 58', () => {
  // eslint-disable-next-line no-undef
  expect(roman('LVIII')).toBe(58);
});

// eslint-disable-next-line no-undef
test('"MCMXCIV" === 1994', () => {
  // eslint-disable-next-line no-undef
  expect(roman('MCMXCIV')).toBe(1994);
});

// eslint-disable-next-line no-undef
test('"IV" === 4', () => {
  // eslint-disable-next-line no-undef
  expect(roman('IV')).toBe(4);
});
