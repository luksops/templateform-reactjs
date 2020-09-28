import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const UserData = ({ nextPage }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				nextPage({ email, password });
			}}
		>
			<TextField
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				type='email'
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
				type='password'
				id='password'
				label='Password'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<Button variant='contained' color='primary' type='submit'>
				Register
			</Button>
		</form>
	);
};

export default UserData;
