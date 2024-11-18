document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (replace with real validation logic)
    const validUsername = 'admin';
    const validPassword = 'jupiter';

    if (username === validUsername && password === validPassword) {
        // Set logged-in state in localStorage
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        document.getElementById('error').style.display = 'block';
    }
});
