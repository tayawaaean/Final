const form = document.querySelector("form"),
	  passField = form.querySelector(".create-password"),
	  passInput = passField.querySelector(".password"),
	  cPassField = form.querySelector(".confirm-password"),
	  cPassInput = cPassField.querySelector(".cPassword");

const eyeIcons =  document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
	eyeIcon.addEventListener("click", () => {
		const pInput = eyeIcon.parentElement.querySelector("input");
	
		if(pInput.type === "password"){
			eyeIcon.classList.replace("bx-hide", "bx-show");
			return (pInput.type = "text");
		}
		eyeIcon.classList.replace("bx-show", "bx-hide");
		pInput.type = "password";
	});
});

function createPass() {
	const passPattern = 
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

	if (!passInput.value.match(passPattern)) {
		return passField.classList.add("invalid");
	}
	passField.classList.remove("invalid");
}

function confirmPass() {
	if(passInput.value !== cPassInput.value || cPassInput.value === "") {
		return cPassField.classList.add("invalid");
	}
	cPassField.classList.remove("invalid");
}

form.addEventListener("submit", (e) =>{
	e.preventDefault();
	createPass();
	confirmPass();


	passInput.addEventListener("keyup", createPass);
	cPassInput.addEventListener("keyup", confirmPass);

	if(
		!passField.classList.contains("invalid") 
	) {
		location.href = form.getAttribute("action");
	}

});
