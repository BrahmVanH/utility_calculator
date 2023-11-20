import React, { useState, FC } from 'react';
import KeypadSvg from './assets/svg/metallic_keypad_v2.svg';
import './style.css';
const Keypad: FC = () => {
	const [digits, setDigits] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	return (
		<div className='keypad'>
			<img src={KeypadSvg} className='keypad-svg' height={'400px'} width={'400px'} />
			<div className='keypad-overlay'>
				{digits.map((digit) => (
					<div key={digit} className={`keypad-digit keypad-${digit}`}>
						{digit}
					</div>
				))}
			</div>
		</div>
	);
};

export default Keypad;
