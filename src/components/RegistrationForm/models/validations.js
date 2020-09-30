function verifyCPF(cpf) {
	if (cpf.length !== 11) {
		return { valid: false, text: 'CPF value must have 11 digits.' };
	} else return { valid: true, text: '' };
}

function verifyPassword(password) {
	if (password.length < 4 || password.length > 72) {
		return {
			valid: false,
			text: 'Password must have between 4 and 72 digits.',
		};
	} else return { valid: true, text: '' };
}

function verifyName(name) {
	if (name.length <= 1) {
		return { valid: false, text: 'Please fill in your name ' };
	} else return { valid: true, text: '' };
}

function verifySurname(name) {
	if (name.length <= 1) {
		return { valid: false, text: 'Please fill in your surname ' };
	} else return { valid: true, text: '' };
}

export { verifyCPF, verifyPassword, verifyName, verifySurname };
