document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Replace this with a real backend API or secure data storage
    const users = {
        'dill': 'jupiter',
        'chalisa': 'jupiter'
    };

    if (users[username] && users[username] === password) {
        // Save logged-in user in localStorage for personalization
        localStorage.setItem('loggedInUser', username);
        window.location.href = `${username}_dashboard.html`; // Redirect to user's unique page
    } else {
        // Show error message
        const error = document.getElementById('error');
        error.textContent = 'Invalid username or password.';
        error.style.display = 'block';
    }
});
