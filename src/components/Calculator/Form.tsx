import React, { useEffect, useState, FC } from 'react';
import { useForm, FieldValues } from 'react-hook-form';


type CalcVariables = {
	type1: string;
	type2: string;
};

type CalculationFunction = ((arg1: number, arg2: number) => number);

interface IProps {
	variables: CalcVariables;
	calculationFunction: CalculationFunction;
}

// Form component for calculating current from voltage and resistance
const Form: FC<IProps> = ({ variables, calculationFunction }) => {
	const [variable1Type, setVariable1Type] = useState<string | null>(null);
	const [variable1Value, setVariable1Value] = useState<number | null>(null);
	const [variable2Type, setVariable2Type] = useState<string | null>(null);
	const [variable2Value, setVariable2Value] = useState<number | null>(null);
	const [calculation, setCalculation] = useState<CalculationFunction>(() => {
		return (arg1: number, arg2: number) => {
			return 0;
		};
	});
	const [result, setResult] = useState<number | null>(null);

	useEffect(() => {
		if (variables.type1 && variables.type2) {
			setVariable1Type(variables.type1);
			setVariable2Type(variables.type2);
			setCalculation(calculationFunction);
		}
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleFormData = (data: FieldValues) => {
		if (data.variable1 && data.variable2) {
			setVariable1Value(parseFloat(data.variable1));
			setVariable2Value(parseFloat(data.variable2));
		}
	};

	useEffect(() => {
		if (variable1Value && variable2Value) {
			const result = calculation(variable1Value, variable2Value);
			setResult(result);
		}
	}, [variable1Value, variable2Value]);

	useEffect(() => {
		console.log(result);
	}, [result]);

	return (
		<form className='input-form' onSubmit={handleSubmit((data) => handleFormData(data))}>
			<input placeholder={`${variable1Type}`} type='number' {...register('variable1', { required: true, pattern: /\d+/ })} />
			{errors.voltage && <p>Voltage is required for this calculation</p>}
			<input placeholder={`${variable2Type}`} type='number' {...register('variable2', { required: true, pattern: /\d+/ })} />
			{errors.resistance && <p>Resistance is required for this calculation.</p>}
			<button type='submit'>Calculate</button>
		</form>
	);
};

export default Form;
