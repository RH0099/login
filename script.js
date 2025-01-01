document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const formButton = document.getElementById("form-button");
    const authForm = document.getElementById("authForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Check if user is already signed in
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        formTitle.textContent = "Login to Continue";
        formButton.textContent = "Login";
    } else {
        formTitle.textContent = "Sign In to Get Started";
        formButton.textContent = "Sign In";
    }

    // Handle form submission
    authForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!savedUsername || !savedPassword) {
            // Save user credentials (sign in)
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.reload(); // Reload to switch to login mode
        } else {
            // Validate login
            if (username === savedUsername && password === savedPassword) {
                // Redirect to Google
                window.location.href = "https://www.google.com";
            }
        }
    });
});
