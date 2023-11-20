import React, { FC, useEffect, useState } from 'react';
import Calculator from '../components/Calculator';

import './Dashboard.css';
import Menu from '../components/Menu';
import { getCalculationFunction } from '../utils/helper';

type CalculationFunction = (arg1: number, arg2: number) => number;

type GetFunction = (functionString: string) => void;

const Dashboard: FC = () => {
	const [functionString, setFunctionString] = useState<string>('');
	const [chosenCalcFunction, setChosenCalcFunction] = useState<CalculationFunction>(() => {
		return (arg1: number, arg2: number) => {
			return 0;
		};
	});
	const [isFunctionSelected, setIsFunctionSelected] = useState<boolean>(false);

	const getChosenCalcFunction: GetFunction = (functionString: string) => {
		setFunctionString(functionString);
		setIsFunctionSelected(true);
	};

	// useEffect(() => {
	// 	if (functionString !== '') {
	// 		let calcFunction = getCalculationFunction(functionString);
	// 		if (!calcFunction) {
	// 			const defaultFunction = (arg1: number, arg2: number) => {
	// 				return 0;
	// 			};
	// 			calcFunction = () => defaultFunction;
	// 		}

	// 		setChosenCalcFunction(calcFunction);
	// 		setIsFunctionSelected(true);
	// 	}
	// }, [functionString]);
	return <div className='dashboard'>{!isFunctionSelected ? <Menu getFunction={getChosenCalcFunction} /> : <Calculator functionString={functionString} />}</div>;
};

export default Dashboard;
