import React, { useEffect, useState, FC } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import { currentFromVoltRes } from '../../utils/calculations';

// Form component for calculating current from voltage and resistance
const CurrentFromVRForm: FC = () => {
	const [current, setCurrent] = useState<number>(0);
	const [voltage, setVoltage] = useState<number>(0);
	const [resistance, setResistance] = useState<number>(0);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleFormData = (data: FieldValues) => {
		if (data.voltage && data.resistance) {
			setResistance(parseFloat(data.resistance));
			setVoltage(parseFloat(data.voltage));
		}
	};

	useEffect(() => {
		if (voltage && resistance) {
      console.log(typeof voltage);
			const current = currentFromVoltRes(voltage, resistance);
      setCurrent(current);
		}
	}, [voltage, resistance]);

	useEffect(() => {
		console.log(current);
	}, [current]);

	return (
		<form onSubmit={handleSubmit((data) => handleFormData(data))}>
			<input type='number' {...register('voltage', { required: true, pattern: /\d+/ })} />
			{errors.voltage && <p>Voltage is required for this calculation</p>}
			<input type='number' {...register('resistance', { required: true, pattern: /\d+/ })} />
			{errors.resistance && <p>Resistance is required for this calculation.</p>}
			<input type='submit' />
		</form>
	);
};

export default CurrentFromVRForm;
