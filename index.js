// Add references
// Input fields
const nameInput = document.querySelector(`input[name="name"]`);
const usernameInput = document.querySelector(`input[name="username"]`);
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);
const confirmPasswordInput = document.querySelector(`input[name="password-two"]`);

// Helper text fields
const nameHelp = document.querySelector(".nameHelp");
const usernameHelp = document.querySelector(".usernameHelp");
const emailHelp = document.querySelector(".emailHelp");
const passwordHelp = document.querySelector(".passwordHelp");
const confirmPasswordHelp = document.querySelector(".confirmPasswordHelp");

// Add show/hide helpers on focus or blue (defocus)
// Name
nameInput.addEventListener("focus", () => {
	nameHelp.style.display = "block"; // normal default behaviour
});

nameInput.addEventListener("blur", () => {
	nameHelp.style.display = "none"; // hides element
});

// Username
usernameInput.addEventListener("focus", () => {
	usernameHelp.style.display = "block";
});

usernameInput.addEventListener("blur", () => {
	usernameHelp.style.display = "none";
});

// Email
emailInput.addEventListener("focus", () => {
	emailHelp.style.display = "block";
});

emailInput.addEventListener("blur", () => {
	emailHelp.style.display = "none";
});

// Password
passwordInput.addEventListener("focus", () => {
	passwordHelp.style.display = "block";
});

passwordInput.addEventListener("blur", () => {
	passwordHelp.style.display = "none";
});

// Confirm password
confirmPasswordInput.addEventListener("focus", () => {
	confirmPasswordHelp.style.display = "block";
});

confirmPasswordInput.addEventListener("blur", () => {
	confirmPasswordHelp.style.display = "none";
});