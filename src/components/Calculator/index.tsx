import React, { useEffect, useState, FC } from 'react';
import Form from './Form';
import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, powerFromCurrRes, powerFromVoltRes } from '../../utils/calculations';
import { getVariableTypes } from '../../utils/helper';

type CalcVariables = {
	type1: string;
	type2: string;
};

type CalculationFunction = (arg1: number, arg2: number) => number;


const Calculator: FC = () => {
	const [selectedCalculation, setSelectedCalculation] = useState<CalculationFunction>(() => {
		return (arg1: number, arg2: number) => {
			return 0;
		};
	});

	const [calcVariables, setCalcVariables] = useState<CalcVariables>({ type1: '', type2: '' });
  useEffect(() => {
    const variableTypes = getVariableTypes(selectedCalculation);
    setCalcVariables(variableTypes);
  })

	return (
		<div className='calculator'>
			<Form variables={calcVariables} calculationFunction={selectedCalculation} />
		</div>
	);
};

export default Calculator;
