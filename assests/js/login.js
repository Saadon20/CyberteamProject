const form = document.getElementById("loginForm");
const emailField = document.getElementById("emailField");
const emailInput = document.getElementById("email");
const passField = document.getElementById("passField");
const passInput = document.getElementById("password");

// Email validation
function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailField.classList.add("invalid");
        emailField.querySelector(".error-text").style.display = "block";
    } else {
        emailField.classList.remove("invalid");
        emailField.querySelector(".error-text").style.display = "none";
    }
}

// Password validation
function validatePassword() {
    if (passInput.value.length < 6) {
        passField.classList.add("invalid");
        passField.querySelector(".error-text").style.display = "block";
    } else {
        passField.classList.remove("invalid");
        passField.querySelector(".error-text").style.display = "none";
    }
}

// Prevent form submission if invalid
form.addEventListener("submit", (e) => {
    validateEmail();
    validatePassword();
    if (emailField.classList.contains("invalid") || passField.classList.contains("invalid")) {
        e.preventDefault();
    }
});

// Validate on input change
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", validatePassword);
