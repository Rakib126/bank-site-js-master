document.getElementById('login-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;

  if (userEmail == 'Hasan12606@gmail.com' && userPassword == 'habit') {
    window.location.href = 'bank.html';
  } else {
    alert('Please enter right email and password.');
  }
});
