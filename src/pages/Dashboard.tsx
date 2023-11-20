import React, { useState } from 'react';
import Calculator from '../components/Calculator';

import './dashboard.css';
import Menu from '../components/Menu';
import { getCalculationFunction } from '../utils/helper';

type CalculationFunction = (arg1: number, arg2: number) => number ;

type GetFunction = (functionString: string) => void;

const Dashboard = () => {
	 const [chosenCalcFunction, setChosenCalcFunction] = useState<CalculationFunction>(() => {
			const defaultFunction: CalculationFunction = (arg1: number, arg2: number) => {
				return 0; // Or any default calculation
			};

			const initialFunction = getCalculationFunction('defaultFunction'); // Replace 'defaultFunction' with your default function string

			return initialFunction || defaultFunction; // Use default function if fetched function is undefined
		});
	
	const getChosenCalcFunction = (functionString: string) => {
		const calcFunction = getCalculationFunction(functionString);
		setChosenCalcFunction(calcFunction);
	}
		return (
			<div className='dashboard'>
				<Menu getFunction={getChosenCalcFunction} />
			<Calculator/>
		</div>
	);
};

export default Dashboard;
