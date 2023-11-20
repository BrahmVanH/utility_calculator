import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, powerFromCurrRes, powerFromVoltRes } from '../utils/calculations';

type CalculationFunction = (arg1: number, arg2: number) => number;
type VariableTypes = {
	type1: string;
	type2: string;
};
export const getVariableTypes = (calculationFunction: CalculationFunction) => {
	let variableTypes: VariableTypes = {
		type1: '',
		type2: '',
	};
	switch (calculationFunction) {
		case currentFromVoltRes:
			variableTypes = {
				type1: 'voltage',
				type2: 'resistance',
			};
			break;
		case voltageFromCurRes:
			variableTypes = {
				type1: 'current',
				type2: 'resistance',
			};
			break;
		case resistanceFromVoltCur:
			variableTypes = {
				type1: 'voltage',
				type2: 'current',
			};
			break;
		case powerFromCurrRes:
			variableTypes = {
				type1: 'current',
				type2: 'resistance',
			};
			break;
		case powerFromVoltCurr:
			variableTypes = {
				type1: 'voltage',
				type2: 'current',
			};
			break;
		case powerFromVoltRes:
			variableTypes = {
				type1: 'voltage',
				type2: 'resistance',
			};
	}

	return variableTypes;
};

export const getCalculationFunction = (functionString: string) => {
	switch (functionString) {
		case 'currVolRes':
			return currentFromVoltRes;
		case 'volCurRes':
			return voltageFromCurRes;
		case 'resVolCur':
			return resistanceFromVoltCur;
		case 'powVolCur':
			return powerFromVoltCurr;
		case 'powCurRes':
			return powerFromCurrRes;
		case 'powVolRes':
			return powerFromVoltRes;
	}
}
