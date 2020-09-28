import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function DeliveryData({ nextPage }) {
	const [adress, setAdress] = useState('');
	const [postCode, setPostCode] = useState('');
	const [county, setCounty] = useState('');
	const [city, setCity] = useState('');

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				nextPage({ adress, postCode, county, city });
			}}
		>
			<TextField
				onChange={(event) => {
					setAdress(event.target.value);
				}}
				type='text'
				id='Adress'
				label='Adress'
				variant='outlined'
				fullWidth
				margin='normal'
				required
			/>
			<TextField
				onChange={(event) => {
					setPostCode(event.target.value);
				}}
				type='text'
				id='PostCode'
				label='Post Code'
				variant='outlined'
				margin='normal'
				required
			/>

			<TextField
				onChange={(event) => {
					setCounty(event.target.value);
				}}
				type='text'
				id='County'
				label='County'
				variant='outlined'
				margin='normal'
				required
			/>

			<TextField
				onChange={(event) => {
					setCity(event.target.value);
				}}
				type='text'
				id='City'
				label='City'
				variant='outlined'
				margin='normal'
				required
			/>

			<Button variant='contained' color='primary' type='submit' fullWidth>
				Register
			</Button>
		</form>
	);
}
