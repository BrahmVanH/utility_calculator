import React, { useEffect, useState, FC } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import KeypadSvg from '../../assets/svg/metallic_keypad_v2.svg';

type CalcVariables = {
	type1: string;
	type2: string;
};

type CalculationFunction = (arg1: number, arg2: number) => number;

interface IProps {
	variables: CalcVariables;
	calculationFunction: CalculationFunction;
}

// Form component for calculating current from voltage and resistance
const Form: FC<IProps> = ({ variables, calculationFunction }) => {
	const [variable1Type, setVariable1Type] = useState<string | null>(null);
	const [variable1Value, setVariable1Value] = useState<number | undefined>(undefined);
	const [variable2Type, setVariable2Type] = useState<string | null>(null);
	const [variable2Value, setVariable2Value] = useState<number | undefined>(undefined);

	const [calculation, setCalculation] = useState<CalculationFunction>(() => {
		return (arg1: number, arg2: number) => {
			return 0;
		};
	});
	const [result, setResult] = useState<number | null>(null);
	const [digits, setDigits] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	useEffect(() => {
		if (variables.type1 && variables.type2) {
			setVariable1Type(variables.type1);
			setVariable2Type(variables.type2);
			setCalculation(calculationFunction);
		}
	}, [variables]);

	useEffect(() => {
		console.log(variable1Type);
	}, [variable1Type]);
	useEffect(() => {
		console.log(variable2Type);
	}, [variable2Type]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const inputDigit = (digit: number) => {
		setVariable1Value(digit);
	};

	const handleFormData = (data: FieldValues) => {
		console.log("handling form data")
		if (data.variable1 && data.variable2) {
			// setVariable1Value(parseFloat(data.variable1));
			// setVariable2Value(parseFloat(data.variable2));
			console.log(data.variable1)
		}
	};

	useEffect(() => {
		console.log("running calculation")
		if (variable1Value !== undefined && variable2Value !== undefined) {
			const result = calculation(variable1Value, variable2Value);
			setResult(result);
		}
	}, [variable1Value, variable2Value]);


	return (
		<div className='content'>
			<form className='input-form' onSubmit={handleSubmit((data) => handleFormData(data))}>
				<input placeholder={`${variable1Type}`} value={variable1Value} type='number' {...register('variable1', { required: true, pattern: /\d+/ })} />
				{errors.voltage && <p>Voltage is required for this calculation</p>}
				<input placeholder={`${variable2Type}`} value={variable2Value} type='number' {...register('variable2', { required: true, pattern: /\d+/ })} />
				{errors.resistance && <p>Resistance is required for this calculation.</p>}
				<button onClick={(e) => e.preventDefault()} type='submit'>Calculate</button>
			</form>
			<div className='keypad'>
				<img src={KeypadSvg} className='keypad-svg' height={'400px'} width={'400px'} />
				<div className='keypad-overlay'>
					{digits.map((digit) => (
						<button onClick={(event) => console.log(event)} key={digit} className={`keypad-digit keypad-${digit}`}>
							{digit}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Form;
