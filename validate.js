function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validateName(name) {
  return name.trim().length >= 3;
}
function validateRoll(roll) {
  return /^\d{2}[A-Za-z]{2}\d{3}$/.test(roll.trim()); // like 24SW025
}
if (typeof module !== 'undefined') {
  module.exports = { validateEmail, validateName, validateRoll };
}