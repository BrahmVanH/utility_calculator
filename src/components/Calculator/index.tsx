import React, { useEffect, useState, FC } from 'react';
import Form from './Form';
import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, powerFromCurrRes, powerFromVoltRes } from '../../utils/calculations';
import { getVariableTypes, getCalculationFunction } from '../../utils/helper';
import './style.css';

type CalcVariables = {
	type1: string;
	type2: string;
};

type CalculationFunction = ((arg1: number, arg2: number) => number);

const Calculator: FC<{ functionString: string }> = ({ functionString }) => {
	const [defaultFunction, setDefaultFunction] = useState<CalculationFunction>(() => {
		return (arg1: number, arg2: number) => {
			return 0;
		};
	});
	// const [selectedCalculation, setSelectedCalculation] = useState<CalculationFunction>(() => {
	// 	return (arg1: number, arg2: number) => {
	// 		return 0;
	// 	};
	// });
	const [calcVariables, setCalcVariables] = useState<CalcVariables>({ type1: '', type2: '' });

	// useEffect(() => {
	// 	if (selectedCalculation !== defaultFunction) {
	// 		setSelectedCalculation(selectedCalculation);
	// 	}
	// }, [selectedCalculation]);

	useEffect(() => {
		if (functionString !== '') {
			
			let calcFunction: CalculationFunction = getCalculationFunction(functionString);
			if (!calcFunction) {
				const defaultFunction = (arg1: number, arg2: number) => {
					return 0;
				};
				calcFunction = () => defaultFunction;
			}
			const variableTypes = getVariableTypes(calcFunction);
			console.log(variableTypes);
			setCalcVariables(variableTypes);
		}
	}, [functionString]);

	return (
		<div className='calculator'>
			<Form variables={calcVariables} calculationFunction={selectedCalculation} />
		</div>
	);
};

export default Calculator;
