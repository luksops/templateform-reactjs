import React from 'react';
import {
	verifyCPF,
	verifyPassword,
	verifyName,
	verifySurname,
} from '../models/validations';

const ValidationContext = React.createContext({
	cpf: verifyCPF,
	password: verifyPassword,
	name: verifyName,
	surname: verifySurname,
});

export default ValidationContext;
