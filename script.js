document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful! Redirecting to Google...");
        window.location.href = "https://www.google.com"; // Redirect to Google
    } else {
        alert("Please enter a valid email and password.");
    }
});
