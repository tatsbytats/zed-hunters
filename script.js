function validatePasswords() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const errorDiv = document.getElementById('password_error');
  
  if (password !== confirmPassword) {
    errorDiv.textContent = 'Passwords do not match!';
    errorDiv.classList.add('show');
    return false;
  }
  
  errorDiv.textContent = '';
  errorDiv.classList.remove('show');
  return true;
}
