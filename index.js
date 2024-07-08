// Add references
// Input fields
const nameInput = document.querySelector(`input[name="name"]`);
const usernameInput = document.querySelector(`input[name="username"]`);
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);
const confirmPasswordInput = document.querySelector(`input[name="password_two"]`);

// Helper text fields
const nameHelp = document.querySelector(".nameHelp");
const usernameHelp = document.querySelector(".usernameHelp");
const emailHelp = document.querySelector(".emailHelp");
const passwordHelp = document.querySelector(".passwordHelp");
const confirmPasswordHelp = document.querySelector(".confirmPasswordHelp");

// Button
const submitButton = document.querySelector('.submitButton');

// Add show/hide helpers on focus or blue (defocus)
// Name
nameInput.addEventListener("focus", () => {
	// normal default behaviour
	nameHelp.classList.remove("hide");
	nameHelp.classList.add("show");
});

nameInput.addEventListener("blur", () => {
	// hides element
	nameHelp.classList.add("hide");
	nameHelp.classList.remove("show");
});

// Username
usernameInput.addEventListener("focus", () => {
	usernameHelp.classList.remove("hide");
	usernameHelp.classList.add("show");
});

usernameInput.addEventListener("blur", () => {
	usernameHelp.classList.add("hide");
	usernameHelp.classList.remove("show");
});

// Email
emailInput.addEventListener("focus", () => {
	emailHelp.classList.remove("hide");
	emailHelp.classList.add("show");
});

emailInput.addEventListener("blur", () => {
	emailHelp.classList.add("hide");
	emailHelp.classList.remove("show");
});

// Password
passwordInput.addEventListener("focus", () => {
	passwordHelp.classList.remove("hide");
	passwordHelp.classList.add("show");
});

passwordInput.addEventListener("blur", () => {
	passwordHelp.classList.add("hide");
	passwordHelp.classList.remove("show");
});

// Confirm password
confirmPasswordInput.addEventListener("focus", () => {
	confirmPasswordHelp.classList.remove("hide");
	confirmPasswordHelp.classList.add("show");
});

confirmPasswordInput.addEventListener("blur", () => {
	confirmPasswordHelp.classList.add("hide");
	confirmPasswordHelp.classList.remove("show");
});

// Disable/enable button
submitButton.disabled = true; // default behaviour

// function to check validity
function checkPasswordValidity() {
	if (passwordInput.value === confirmPasswordInput.value && passwordInput.checkValidity() && confirmPasswordInput.checkValidity()) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

// fire event when user manipulates the field & exits the field
passwordInput.addEventListener("input", () => {
	checkPasswordValidity();
});

passwordInput.addEventListener("blur", () => {
	checkPasswordValidity();
});

confirmPasswordInput.addEventListener("input", () => {
	checkPasswordValidity();
});

confirmPasswordInput.addEventListener("blur", () => {
	checkPasswordValidity();
});