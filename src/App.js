import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';

class App extends Component {
	render() {
		return (
			<Container component='article' maxWidth='sm'>
				<Typography component='h1' variant='h3' align='center'>
					Registration Form
				</Typography>
				<FormularioCadastro onSubmit={onSubmitForm} verifyCPF={verifyCPF} />
			</Container>
		);
	}
}

function onSubmitForm(data) {
	console.log(data);
}

function verifyCPF(cpf) {
	if (cpf.length !== 11) {
		return { valid: true, text: 'CPF value must have 11 digits.' };
	} else return { valid: false, text: '' };
}

export default App;
