// script.js
function openLoginPage() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeLoginPage() {
    document.getElementById('login-modal').style.display = 'none';
}

function submitLoginForm() {
    // You can add your login logic here
    // For this example, let's just close the login modal
    closeLoginPage();
}
