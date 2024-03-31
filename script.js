const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (nameValue === '') {
        setErrorFor(nameInput, nameError, 'Name cannot be blank');
    } else {
        setSuccessFor(nameInput, nameError);
    }

    if (emailValue === '') {
        setErrorFor(emailInput, emailError, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailInput, emailError, 'Invalid email format');
    } else {
        setSuccessFor(emailInput, emailError);
    }

    if (passwordValue === '') {
        setErrorFor(passwordInput, passwordError, 'Password cannot be blank');
    } else {
        setSuccessFor(passwordInput, passwordError);
    }
}

function setErrorFor(input, errorElement, message) {
    input.classList.add('error-input');
    errorElement.innerText = message;
}

function setSuccessFor(input, errorElement) {
    input.classList.remove('error-input');
    errorElement.innerText = '';
}

function isEmail(email) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}
