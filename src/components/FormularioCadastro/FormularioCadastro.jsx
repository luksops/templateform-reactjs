import React, { useState } from 'react';
import {
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';

export default function FormularioCadastro({ onSubmit, verifyCPF }) {
	const [error, setError] = useState({ cpf: { valid: false, text: '' } });
	const [name, setName] = useState('');
	const [surname, setSurame] = useState('');
	const [cpf, setCpf] = useState('');
	const [promotions, setPromotions] = useState(true);
	const [newsletter, setNewsletter] = useState(true);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSubmit({ name, surname, cpf, promotions, newsletter });
			}}
		>
			<TextField
				onChange={(event) => {
					let tempName = event.target.value;
					setName(
						[
							tempName.slice(0, 1).toUpperCase(),
							tempName.slice(1, tempName.length),
						].join('')
					);
				}}
				value={name}
				id='name'
				label='Name'
				variant='outlined'
				fullWidth
				margin='normal'
			/>
			<TextField
				onChange={(event) => {
					let tempSurame = event.target.value;
					setSurame(
						[
							tempSurame.slice(0, 1).toUpperCase(),
							tempSurame.slice(1, tempSurame.length),
						].join('')
					);
				}}
				value={surname}
				id='surname'
				label='Surname'
				variant='outlined'
				fullWidth
				margin='normal'
			/>
			<TextField
				onChange={(event) => setCpf(event.target.value)}
				onBlur={(event) => {
					let validation = verifyCPF(cpf);
					setError({ cpf: validation });
				}}
				error={error.cpf.valid}
				helperText={error.cpf.text}
				value={cpf}
				id='cpf'
				label='CPF'
				variant='outlined'
				fullWidth
				margin='normal'
			/>
			<FormControlLabel
				label='Promotions'
				control={
					<Checkbox
						onChange={(event) => {
							setPromotions(event.target.checked);
						}}
						checked={promotions}
						color='primary'
						name='Promotions'
					/>
				}
			/>

			<FormControlLabel
				label='Newsletter'
				control={
					<Checkbox
						checked={newsletter}
						color='primary'
						onChange={(event) => {
							setNewsletter(event.target.checked);
						}}
					/>
				}
				name='Newsletter'
			/>

			<Button variant='contained' color='primary' type='submit'>
				Register
			</Button>
		</form>
	);
}
