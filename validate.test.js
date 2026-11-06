const { validateEmail, validateName, validateRoll } = require('./validate');

test('Email validation works correctly', () => {
  expect(validateEmail('invalidEmail')).toBe(false);
});
test('Valid email is accepted', () => {
  expect(validateEmail('student@gmail.com')).toBe(true);
});
test('Empty name is rejected', () => {
  expect(validateName('')).toBe(false);
});
test('Valid name is accepted', () => {
  expect(validateName('Mariam Azeem')).toBe(true);
});
test('Roll number format is checked', () => {
  expect(validateRoll('24SW025')).toBe(true);
  expect(validateRoll('abc')).toBe(false);
});