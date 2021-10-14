const roman = require('../romanNumeralConverter');


test('LVIII === 58', () => {
    expect(roman('LVIII')).toBe(58);
  });

test('"MCMXCIV" === 1994', () => {
    expect(roman("MCMXCIV")).toBe(1994);
  });

test('"IV" === 4', () => {
    expect(roman("IV")).toBe(4);
  });