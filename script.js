
function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    alert(`Welcome, ${name}! You have successfully registered.`);
    window.location.href = "products.html";
    
    return false; // Prevent form submission to stay on the page
}
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "" || password === "") {
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    alert("You have successfully logged in.");
    
    setTimeout(function() {
        window.location.href = "products.html";
    }, 1000); // 1-second delay to allow the alert to be visible

    return false; // Prevent form submission to stay on the page
}
