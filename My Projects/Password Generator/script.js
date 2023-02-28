// Generate random password
function generatePassword() {
	const length = document.getElementById('password-length').value;
	const includeUpper = document.getElementById('include-upper').checked;
	const includeLower = document.getElementById('include-lower').checked;
	const includeNumbers = document.getElementById('include-numbers').checked;
	const includeSymbols = document.getElementById('include-symbols').checked;

	let charset = '';
	if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
	if (includeNumbers) charset += '0123456789';
	if (includeSymbols) charset += '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

	let password = '';
	for (let i = 0; i < length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	return password;
}

// Set password value on click
document.getElementById('generate-btn').addEventListener('click', function() {
	document.getElementById('password').value = generatePassword();
});