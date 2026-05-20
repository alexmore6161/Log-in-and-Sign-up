const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const usrname = document.getElementById('username').value.trim();
    if (usrname) {
        window.location.href = `result.html?username=${encodeURIComponent(usrname)}`;
    } else {
        alert('Please enter your username.');
    }
});