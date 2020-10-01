import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';
import {
	verifyCPF,
	verifyPassword,
	verifyName,
	verifySurname,
} from './components/RegistrationForm/models/validations';
import ValidationContext from './components/RegistrationForm/contexts/ValidationContext';

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<Container component='article' maxWidth='sm'>
				<Typography component='h1' variant='h3' align='center'>
					Registration Form
				</Typography>
				<ValidationContext.Provider
					value={{
						cpf: verifyCPF,
						password: verifyPassword,
						name: verifyName,
						surname: verifySurname,
					}}
				>
					<RegistrationForm />
				</ValidationContext.Provider>
			</Container>
		);
	}
}

export default App;
