import { useState } from 'react';

function useError(validations) {
	const [userError, setError] = useState(createInicialState());

	function createInicialState() {
		let initialState = {};
		for (let field in validations) {
			initialState[field] = { valid: true, text: '' };
		}

		return initialState;
	}

	function validateField(event) {
		const { name, value } = event.target;
		let isValid = validations[name](value);
		let newError = { ...userError, [name]: isValid };
		setError(newError);
	}

	function isValid() {
		for (let field in userError) {
			if (!userError[field].valid) return false;
		}
		return true;
	}

	return [userError, validateField, isValid];
}

export default useError;
