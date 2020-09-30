import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

export default function RegistrationForm({ validations }) {
	const [page, setPage] = useState(0);
	const [dataCollected, setDataCollected] = useState({});
	useEffect(() => {
		console.log(dataCollected);
	});

	const pages = [
		<UserData nextPage={collectData} validations={validations} />,
		<PersonalData nextPage={collectData} validations={validations} />,
		<DeliveryData nextPage={collectData} validations={validations} />,
		<Typography variant='h5'> Thank You!</Typography>,
	];

	function collectData(data) {
		setDataCollected({ ...dataCollected, ...data });
		nextPage();
	}

	function nextPage() {
		setPage(page + 1);
	}

	return (
		<>
			<Stepper activeStep={page}>
				<Step>
					<StepLabel>Login</StepLabel>
				</Step>
				<Step>
					<StepLabel>Personal</StepLabel>
				</Step>
				<Step>
					<StepLabel>Delivery</StepLabel>
				</Step>
				<Step>
					<StepLabel>Done!</StepLabel>
				</Step>
			</Stepper>
			{pages[page]}
		</>
	);
}

//
//
//
