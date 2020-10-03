import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidationContext from '../contexts/ValidationContext';
import useError from '../hooks/useError';

const UserData = ({ nextPage }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const validations = useContext(ValidationContext);

	const [userError, validateField, isValid] = useError(validations);

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
