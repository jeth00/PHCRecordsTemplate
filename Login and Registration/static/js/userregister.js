

document.addEventListener('DOMContentLoaded', function() {
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const birthdateInput = document.getElementById('birthdate');
  const usernameInput = document.getElementById('username');

  firstNameInput.addEventListener('input', updateUsername);
  lastNameInput.addEventListener('input', updateUsername);
  birthdateInput.addEventListener('change', updateUsername);

  function updateUsername() {
    const firstName = firstNameInput.value.trim().toLowerCase();
    const lastName = lastNameInput.value.trim().toLowerCase().replace(/\s/g, ''); 
    const birthdate = new Date(birthdateInput.value).getFullYear();

    const username = firstName + lastName + birthdate;

    usernameInput.value = username;
  }

  usernameInput.disabled = true;
});


