// Get URL parameters
const params = new URLSearchParams(window.location.search);
const username = params.get('username');
const email = params.get('email');
const output = document.getElementById('output');

if (username && email) {
    output.innerHTML = `
        <p>Welcome, <strong>${username}</strong>!</p>
        <p>Your email is: <strong>${email}</strong></p>
        <p>Thanks for signing up — your details are now ready.</p>
    `;
} else if (username) {
    output.innerHTML = `
        <p>Welcome, <strong>${username}</strong>!</p>
    `;
} else {
    output.innerHTML = "<p>No signup data received. Please go back and sign up again.</p>";
}
