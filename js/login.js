document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    var password = document.getElementById('password').value;
    var correctPassword = "Termux@10"; // Replace "yourpassword" with your predefined password

    if (password === correctPassword) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href = "https://black44r.github.io/tufan.github.io/index.html"; // Redirect to Google.com
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerText = 'Incorrect password!';
    }
});
