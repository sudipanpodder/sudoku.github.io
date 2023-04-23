const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	if (username === '' || password === '') {
		alert('Please enter username and password');
	} else if (username === 'user' && password === 'password') {
		alert('Login successful');
		// Redirect to dashboard or other page
	} else {
		alert('Incorrect username or password');
	}
});
