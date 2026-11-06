const form = document.getElementById('regForm');
const message = document.getElementById('message');

function showError(id, text) {
  document.getElementById(id + 'Error').textContent = text;
  document.getElementById(id).classList.toggle('invalid', text !== '');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  message.textContent = '';
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const roll = document.getElementById('roll').value;
  let ok = true;

  if (name.trim() === '') { showError('name', 'Name is required'); ok = false; }
  else if (!validateName(name)) { showError('name', 'Name is too short'); ok = false; }
  else showError('name', '');

  if (email.trim() === '') { showError('email', 'Email is required'); ok = false; }
  else if (!validateEmail(email)) { showError('email', 'Invalid Email'); ok = false; }
  else showError('email', '');

  if (roll.trim() === '') { showError('roll', 'Roll number is required'); ok = false; }
  else if (!validateRoll(roll)) { showError('roll', 'Format should be like 24SW025'); ok = false; }
  else showError('roll', '');

  if (ok) {
    message.textContent = 'Registration successful!';
    form.reset();
  }
});