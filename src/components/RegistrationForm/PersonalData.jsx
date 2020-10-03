import React, { useState, useContext } from 'react';
import {
	Button,
	TextField,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import ValidationContext from '../contexts/ValidationContext';
import useError from '../hooks/useError';

export default function PersonalData({ nextPage }) {
	const [userName, setName] = useState('');
	const [userSurname, setSurame] = useState('');
	const [userCPF, setCpf] = useState('');
	const [userPromotions, setPromotions] = useState(true);
	const [userNewsletter, setNewsletter] = useState(true);
	const validations = useContext(ValidationContext);

	const [userError, validateField, isValid] = useError(validations);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (isValid()) {
					nextPage({
						userName,
						userSurname,
						userCPF,
						userPromotions,
						userNewsletter,
					});
				}
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
				onBlur={validateField}
				value={userName}
				name='name'
				error={!userError.name.valid}
				helperText={userError.name.text}
				id='name'
				label='Name'
				variant='outlined'
				fullWidth
				margin='normal'
				required
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
				onBlur={validateField}
				error={!userError.surname.valid}
				helperText={userError.surname.text}
				value={userSurname}
				name='surname'
				id='surname'
				label='Surname'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<TextField
				onChange={(event) => setCpf(event.target.value)}
				onBlur={validateField}
				error={!userError.cpf.valid}
				helperText={userError.cpf.text}
				value={userCPF}
				name='cpf'
				type='number'
				id='cpf'
				label='CPF'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<FormControlLabel
				label='Promotions'
				name='promotions'
				control={
					<Checkbox
						onChange={(event) => {
							setPromotions(event.target.checked);
						}}
						checked={userPromotions}
						color='primary'
						name='Promotions'
					/>
				}
			/>

			<FormControlLabel
				label='Newsletter'
				name='newsletter'
				control={
					<Checkbox
						checked={userNewsletter}
						color='primary'
						onChange={(event) => {
							setNewsletter(event.target.checked);
						}}
					/>
				}
			/>

			<Button variant='contained' color='primary' type='submit'>
				Next
			</Button>
		</form>
	);
}
