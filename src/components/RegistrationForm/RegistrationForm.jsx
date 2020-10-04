import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useExportData from '../hooks/useExportData';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';
import FinishScreen from './FinishScreen/FinishScreen';

export default function RegistrationForm({ validations }) {
	const [page, setPage] = useState(0);
	const [updateData, exportData] = useExportData(page);

	useEffect(exportData);

	const pages = [
		<UserData nextPage={nextPage} validations={validations} />,
		<PersonalData nextPage={nextPage} validations={validations} />,
		<DeliveryData nextPage={nextPage} validations={validations} />,
		<FinishScreen />,
	];

	function nextPage(data) {
		updateData(data);
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

/**/
