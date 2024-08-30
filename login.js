// index.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const loader = document.getElementById("loader");
    const form = document.getElementById("form");

    if (password === "Termux@10") {
        form.style.display = "none";
        loader.style.display = "block";
        window.location.href = "https://black44r.github.io/tufan.github.io/index.html";

        setTimeout(() => {
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                loader.style.display = "none";
                form.style.display = "block";
            });
        }, 2000); // Simulate a loading delay
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid key. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

