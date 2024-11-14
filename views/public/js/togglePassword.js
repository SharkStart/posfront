function togglePasswordVisibility(inputId, buttonId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);
    const eyeIcon = toggleButton.querySelector("img");

    toggleButton.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.src = "/assets/icons/eye-slash.png";
            eyeIcon.alt = "Ocultar contraseña";
        } else {
            passwordInput.type = "password";
            eyeIcon.src = "/assets/icons/eye.png";
            eyeIcon.alt = "Mostrar contraseña";
        }
    });
}

togglePasswordVisibility("password", "toggle-password");
togglePasswordVisibility("confirm-password", "toggle-confirm-password");
