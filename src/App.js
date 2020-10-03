import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import './App.css';

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<Container component='article' maxWidth='sm'>
				<Typography component='h1' variant='h3' align='center'>
					Registration Form
				</Typography>
				<RegistrationForm />
			</Container>
		);
	}
}

export default App;
