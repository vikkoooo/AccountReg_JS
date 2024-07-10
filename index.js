// Add references
// Input fields
const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector(`input[name="name"]`);
const usernameInput = document.querySelector(`input[name="username"]`);
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);
const confirmPasswordInput = document.querySelector(`input[name="password_two"]`);

// Help texts
const helpTexts = document.querySelectorAll(".helpText");

// Form and button
const registerForm = document.querySelector(".registerForm");
const submitButton = document.querySelector(".submitButton");

// Add eventlisteners on focus and blur for all input fields
inputs.forEach(input => {
	input.addEventListener("focus", toggleHelpText);
	input.addEventListener("blur", toggleHelpText);
});

// Function to toggle help text visibility
function toggleHelpText(e) {
	const parent = e.target.parentNode; // will return the <label> and its children
	const helpTextNode = parent.querySelector(".helpText"); // will grab our <p>

	// type tells us if we did focus or unfocus (blur)
	if (e.type === "focus") {
		helpTextNode.classList.remove("hide");
		helpTextNode.classList.add("show");
	} else if (e.type === "blur") {
		helpTextNode.classList.add("hide");
		helpTextNode.classList.remove("show");
	}
}

// Disable/enable button
submitButton.disabled = false; // default behaviour

// function to check validity
function checkPasswordValidity() {
	confirmPasswordInput.setCustomValidity(
		confirmPasswordInput.value !== passwordInput.value ? 'Passwords do not match' : ''
	);

	if (passwordInput.value === confirmPasswordInput.value && passwordInput.checkValidity() && confirmPasswordInput.checkValidity()) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

// fire event when user manipulates the field & exits the field
passwordInput.addEventListener("input", () => { checkPasswordValidity(); });
confirmPasswordInput.addEventListener("input", () => { checkPasswordValidity(); });

// Submit form listener
registerForm.addEventListener("submit", (e) => {
	e.preventDefault(); // disable page reload
	const data = {
		name: nameInput.value,
		username: usernameInput.value,
		email: emailInput.value,
		password: passwordInput.value // todo: hash password
	}
	console.log(data);
});