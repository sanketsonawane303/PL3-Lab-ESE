function validateName() {
  const name = document.getElementById('fullname').value;

  if (name.length == 0) {
    producePrompt('Fullname is required', 'fullname-error', 'red');
    return false;
  }

  producePrompt('Valid', 'fullname-error', 'green');
  return true;
}

function validatePhone() {
  var phone = document.getElementById('phone-no').value;

  if (phone.length == 0) {
    producePrompt('Phone number is required', 'phone-no-error', 'red');
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    producePrompt(
      'Phone should only contain 10 digits',
      'phone-no-error',
      'red'
    );
    return false;
  }

  producePrompt('Valid', 'phone-no-error', 'green');
  return true;
}

function validateEmail() {
  var email = document.getElementById('email').value;

  if (email.length == 0) {
    producePrompt('Email is required', 'email-error', 'red');
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    producePrompt('Email Invalid', 'email-error', 'red');
    return false;
  }

  producePrompt('Valid', 'email-error', 'green');
  return true;
}

function validateIdProof() {
  const idProof = document.getElementById('id-proof').value;

  if (idProof.length == 0) {
    producePrompt('ID Proof is required', 'id-proof-error', 'red');
    return false;
  }

  producePrompt('Valid', 'id-proof-error', 'green');
  return true;
}

function validateUsername() {
  const username = document.getElementById('username').value;

  if (username.length == 0) {
    producePrompt('Username is required', 'username-error', 'red');
    return false;
  }

  if (username.length < 5) {
    producePrompt(
      'Username should have atleast 5 characters',
      'username-error',
      'red'
    );
    return false;
  }

  producePrompt('Valid', 'username-error', 'green');
  return true;
}

function validatePassword() {
  const password = document.getElementById('username').value;

  if (password.length == 0) {
    producePrompt('Password is required', 'password-error', 'red');
    return false;
  }

  if (password.length < 5) {
    producePrompt(
      'Password should have atleast 5 characters',
      'password-error',
      'red'
    );
    return false;
  }

  producePrompt('Valid', 'password-error', 'green');
  return true;
}

function validateForm(event) {
  event.preventDefault();
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateIdProof() ||
    !validateUsername() ||
    !validatePassword()
  ) {
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
  } else {
    producePrompt('Successfully submitted', 'submit-error', 'green');
    alert('Successfully submitted');
  }
}

function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}
