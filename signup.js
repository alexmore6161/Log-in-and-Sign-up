const form = document.getElementById('signupForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!username) {
        alert('Please enter your username.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    const query = new URLSearchParams({
        username: username,
        email: email
    }).toString();

    window.location.href = `result.html?${query}`;
});
