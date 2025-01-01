document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const formButton = document.getElementById("form-button");
    const authForm = document.getElementById("authForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Check if user already signed in
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        formTitle.textContent = "Login to Continue";
        formButton.textContent = "Login";
    }

    // Handle form submission
    authForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!savedUsername || !savedPassword) {
            // Save credentials for the first time
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("Sign-In successful! Please log in next time.");
            window.location.reload();
        } else {
            // Validate login
            if (username === savedUsername && password === savedPassword) {
                alert("Login successful! Redirecting to Google...");
                window.location.href = "https://www.google.com";
            } else {
                alert("Invalid credentials! Please try again.");
            }
        }
    });
});
