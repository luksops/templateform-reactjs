import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidationContext from './contexts/ValidationContext';

const UserData = ({ nextPage }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userError, setError] = useState({
		password: { valid: true, text: '' },
	});

	const validations = useContext(ValidationContext);

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

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (isValid()) {
					nextPage({ email, password });
				}
			}}
		>
			<TextField
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				type='email'
				name='email'
				id='email'
				label='Email'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<TextField
				onChange={(event) => {
					setPassword(event.target.value);
				}}
				onBlur={validateField}
				error={!userError.password.valid}
				helperText={userError.password.text}
				type='password'
				name='password'
				id='password'
				label='Password'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<Button variant='contained' color='primary' type='submit'>
				Login
			</Button>
		</form>
	);
};

export default UserData;
