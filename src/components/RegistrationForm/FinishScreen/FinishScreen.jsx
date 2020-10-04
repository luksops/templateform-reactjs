import { Typography, Container } from '@material-ui/core';
import React from 'react';
import checkIcon from '../../../img/check-circle.svg';
import './style.css';

function FinishScreen() {
	return (
		<Container maxWidth='sm' id='container-finish'>
			<img
				src={checkIcon}
				height='50%'
				width='50%'
				alt='Finished icon'
				id='img-finish'
			/>
			<Typography id='text-finish' variant='h4'>
				Thank you!
			</Typography>
		</Container>
	);
}

export default FinishScreen;
