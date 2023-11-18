import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, poweFromCurrRes, powerFromVoltRes } from '../utils/calculations';

describe('calculates current/amperage from given voltage and resistance', () => {
	// Passing test
	it('Should return a positive number given two positive numbers', () => {
		const expectedResult = 1;
		const result = currentFromVoltRes(5, 5);
		expect(result).toBe(expectedResult);
	});
	// Exception case 1
	it('Should throw an error if either variables is not a number', () => {
		const voltage = 'string';
		const resistance = 11;

		const err = new Error('Voltage and resistance must be numbers');

		const errCallback = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCallback).toThrowError(err);
	});
	// Exception case 2
	it('Should throw an error if either variables is not a number', () => {
		const voltage = 11;
		const resistance = 'string';

		const err = new Error('Voltage and resistance must be numbers');

		const errCallback = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCallback).toThrowError(err);
	});
	// Exception case 3
	it('Should throw an error if either variables is undefined', () => {
		const voltage = undefined;
		const resistance = 11;

		const err = new Error('Voltage or resistance is undefined');

		const errCallback = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCallback).toThrowError(err);
	});
	// Exception case 4
	it('Should throw an error if either variables is undefined', () => {
		const voltage = 11;
		const resistance = undefined;

		const err = new Error('Voltage or resistance is undefined');

		const errCallback = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCallback).toThrowError(err);
	});
	//Exception case 5
	it('Should throw an error if either number is negative', () => {
		const voltage = -12;
		const resistance = 12;

		const err = new Error('Both parameters must be positive numbers');

		const errCb = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});
	//Exception case 6
	it('Should throw an error if either number is negative', () => {
		const voltage = 12;
		const resistance = -12;

		const err = new Error('Both parameters must be positive numbers');

		const errCb = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});
});

describe('Given two number parameters, it should calculate voltage and return a representative number', () => {
	// Passing test
	it('Should return the product of two given numbers ', () => {
		const expectedResult = 144;
		const current = 12;
		const resistance = 12;

		const result = voltageFromCurRes(current, resistance);
		expect(result).toBe(expectedResult);
	});

	// Exception test 1
	it('Should throw an error if either parameter is undefined', () => {
		const current = undefined;
		const resistance = 100;
		const err = new Error('Current or resistance is undefined');

		const errCb = () => {
			voltageFromCurRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 2
	it('Should throw an error if either parameter is undefined', () => {
		const current = 100;
		const resistance = undefined;
		const err = new Error('Current or resistance is undefined');

		const errCb = () => {
			voltageFromCurRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});
	// Exception test 3
	it('Should throw an error if either parameter is not a number', () => {
		const current = 12;
		const resistance = 'string';
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			voltageFromCurRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 4
		it('Should throw an error if either parameter is not a number', () => {
			const current = 'string';
			const resistance = 12;
			const err = new Error('Both parameters must be numbers');

			const errCb = () => {
				voltageFromCurRes(current, resistance);
			};

			expect(errCb).toThrowError(err);
		});

		// Exception test 5
		it('Should throw an error if either number is negative', () => {
			const current = -12;
			cosnt resis
		})
});
