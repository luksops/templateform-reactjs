import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import {
	verifyCPF,
	verifyPassword,
	verifyName,
	verifySurname,
} from './components/RegistrationForm/models/validations';

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<Container component='article' maxWidth='sm'>
				<Typography component='h1' variant='h3' align='center'>
					Registration Form
				</Typography>
				<RegistrationForm
					validations={{
						cpf: verifyCPF,
						password: verifyPassword,
						name: verifyName,
						surname: verifySurname,
					}}
				/>
			</Container>
		);
	}
}

export default App;
