const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const banner = document.getElementById("verify");

password2.addEventListener("focusout", verify);

// This should be refactored.
function verify() {
	if (password1.value !== password2.value) {
		banner.textContent = "❗Passwords DO NOT MATCH!";
		banner.style.visibility = "show";
		password2.style.backgroundColor = "#fff0f3";
        password1.value = "";
		password2.value = "";
		password2.focus();
	} else {
		banner.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}

const pageRating = document.getElementById("pageRating");
const rating = document.getElementById("activeRating");
pageRating.value = 10;
rating.textContent = pageRating.value;
pageRating.addEventListener('change', displayRating);
pageRating.addEventListener('input', displayRating);
function displayRating() {
    rating.textContent = pageRating.value;
}