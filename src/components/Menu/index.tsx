import React, { useState, FC, useEffect } from 'react';

type CalculationFunction = (arg1: number, arg2: number) => number;
type GetFunction = (newValue: string) => void;
interface MenuProps {
	getFunction: GetFunction; // Define the prop type
}

const Menu: FC<MenuProps> = ({ getFunction }) => {
	const [selectedCalculation, setSelectedCalculation] = useState<string>('');

	useEffect(() => {
		if (selectedCalculation !== '') {

			getFunction(selectedCalculation);
		}
	}, [selectedCalculation]);

	const handleSelect = (selected: string) => {
		setSelectedCalculation(selected);
	}
	return (
		<div>
			<ul>
				<li>
					<button onClick={() => handleSelect('currVolRes')}>
						Current <span>(voltage, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleSelect('volCurRes')}>
						Voltage <span>(current, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleSelect('resVolCur')}>
						Resistance <span>(voltage, current)</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleSelect('powVolCur')}>
						Power <span>(voltage, current)</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleSelect('powCurRes')}>
						Power <span>(current, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => handleSelect('powVolRes')}>
						Power <span>(voltage, resistance)</span>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
