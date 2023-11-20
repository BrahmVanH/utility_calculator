import React, { useState, FC, useEffect } from 'react';

type CalculationFunction = (arg1: number, arg2: number) => number;
type GetFunction = (newValue: string) => void;

const Menu: FC<GetFunction> = (getFunction) => {
	const [selectedCalculation, setSelectedCalculation] = useState<string>('');

	useEffect(() => {
		if (selectedCalculation !== '') {
			getFunction(selectedCalculation);
		}
	}, [selectedCalculation]);
	return (
		<div>
			<ul>
				<li>
					<button onClick={() => setSelectedCalculation('currVolRes')}>
						Current <span>(voltage, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => setSelectedCalculation('volCurRes')}>
						Voltage <span>(current, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => setSelectedCalculation('resVolCur')}>
						Resistance <span>(voltage, current)</span>
					</button>
				</li>
				<li>
					<button onClick={() => setSelectedCalculation('powVolCur')}>
						Power <span>(voltage, current)</span>
					</button>
				</li>
				<li>
					<button onClick={() => setSelectedCalculation('powCurRes')}>
						Power <span>(current, resistance)</span>
					</button>
				</li>
				<li>
					<button onClick={() => setSelectedCalculation('powVolRes')}>
						Power <span>(voltage, resistance)</span>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
