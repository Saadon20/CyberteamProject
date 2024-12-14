const form = document.getElementById('signup-form');
const emailField = document.querySelector('.email-field');
const emailInput = document.getElementById('email');
const passField = document.querySelector('.create-password');
const passInput = document.getElementById('password');
const cPassField = document.querySelector('.confirm-password');
const cPassInput = document.getElementById('confirm-password');

// Regular expression to validate email
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Regular expression for strong password (at least 8 chars, with number, lowercase, uppercase, and symbol)
const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Email validation
function validateEmail() {
    if (!emailPattern.test(emailInput.value)) {
        emailField.classList.add("invalid");
        return false;
    }
    emailField.classList.remove("invalid");
    return true;
}

// Password validation
function validatePassword() {
    if (!passPattern.test(passInput.value)) {
        passField.classList.add("invalid");
        return false;
    }
    passField.classList.remove("invalid");
    return true;
}

// Confirm password validation
function validateConfirmPassword() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        cPassField.classList.add("invalid");
        return false;
    }
    cPassField.classList.remove("invalid");
    return true;
}

// Event listeners for real-time validation
emailInput.addEventListener('input', validateEmail);
passInput.addEventListener('input', validatePassword);
cPassInput.addEventListener('input', validateConfirmPassword);

// Show/hide password functionality
document.querySelectorAll('.show-hide').forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
        const passwordField = eyeIcon.previousElementSibling;
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.classList.replace('bx-hide', 'bx-show');
        } else {
            passwordField.type = "password";
            eyeIcon.classList.replace('bx-show', 'bx-hide');
        }
    });
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPassValid = validatePassword();
    const isConfirmPassValid = validateConfirmPassword();

    if (isEmailValid && isPassValid && isConfirmPassValid) {
        form.submit(); // Submit the form if all validations pass
    } else {
        alert("Please fix the errors in the form.");
    }
});

