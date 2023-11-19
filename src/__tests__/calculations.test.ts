import exp from 'constants';
import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, powerFromCurrRes, powerFromVoltRes } from '../utils/calculations';

// currentFromVoltRes test suite
describe('calculates current/amperage from given voltage and resistance', () => {
	// Passing test
	it('Should return the quotient of two positive numbers', () => {
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

		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});
	//Exception case 6
	it('Should throw an error if either number is negative', () => {
		const voltage = 12;
		const resistance = -12;

		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			currentFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});
});

// voltageFromCurRes test suite
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
		const resistance = 12;
		const err = Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			voltageFromCurRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});
	// Exception test 6
	it('Should throw an error if either number is negative', () => {
		const current = 12;
		const resistance = -12;
		const err = Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			voltageFromCurRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});
});

// resistanceFromVoltCur test suite
describe('Given two positive number parameters, it should return a positive number representing resistance', () => {
	// Passing test
	it('Should return a quotient of two given numbers', () => {
		const expectedResult = 1;
		const voltage = 5;
		const current = 5;
		const result = resistanceFromVoltCur(voltage, current);

		expect(result).toBe(expectedResult);
	});

	// Exception test 1
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = undefined;
		const current = 12;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 2
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = 12;
		const current = undefined;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	//Exception test 3
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 'string';
		const current = 12;
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 4
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 12;
		const current = 'string';
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 5
	it('Should throw an error if either number is negative', () => {
		const voltage = -12;
		const current = 12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 6
	it('Should throw an error if either number is negative', () => {
		const voltage = 12;
		const current = -12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			resistanceFromVoltCur(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});
});

// powerFromVoltCurr test suite
describe('Given two positive number parameters, it should return a positive number representing power', () => {
	// Passing test
	it('Should return the product of two given numbers', () => {
		const expectedResult = 25;
		const voltage = 5;
		const current = 5;
		const result = powerFromVoltCurr(voltage, current);

		expect(result).toBe(expectedResult);
	});

	// Exception test 1
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = undefined;
		const current = 12;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 2
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = 12;
		const current = undefined;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	//Exception test 3
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 'string';
		const current = 12;
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 4
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 12;
		const current = 'string';
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 5
	it('Should throw an error if either number is negative', () => {
		const voltage = -12;
		const current = 12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 6
	it('Should throw an error if either number is negative', () => {
		const voltage = 12;
		const current = -12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromVoltCurr(voltage, current);
		};

		expect(errCb).toThrowError(err);
	});
});

// powerFromCurrRes test suite
describe('Given two positive number parameters, it should return a positive number representing power', () => {
	// Passing test
	it('Should return the product of the square of the current and resistance', () => {
		const expectedResult = 5 * 5 * 5;
		const current = 5;
		const resistance = 5;
		const result = powerFromCurrRes(current, resistance);

		expect(result).toBe(expectedResult);
	});

	// Exception test 1
	it('Should throw an error if either parameter is undefined', () => {
		const current = 12;
		const resistance = undefined;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromCurrRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 2
	it('Should throw an error if either parameter is undefined', () => {
		const current = undefined;
		const resistance = 12;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromCurrRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	//Exception test 3
	it('Should throw an error if either parameter is not a number', () => {
		const current = 12;
		const resistance = 'string';
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromCurrRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 4
	it('Should throw an error if either parameter is not a number', () => {
		const current = 'string';
		const resistance = 12;
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromVoltCurr(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 5
	it('Should throw an error if either number is negative', () => {
		const current = 12;
		const resistance = -12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromCurrRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 6
	it('Should throw an error if either number is negative', () => {
		const current = -12;
		const resistance = 12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromCurrRes(current, resistance);
		};

		expect(errCb).toThrowError(err);
	});
});

// powerFromVoltRes test suite
describe('Given two positive number parameters, it should return a positive number representing power', () => {
	// Passing test
	it('Should return the quotient of the square of the voltage over resistance', () => {
		const expectedResult = (5 * 5) / 5;
		const voltage = 5;
		const resistance = 5;
		const result = powerFromVoltRes(voltage, resistance);

		expect(result).toBe(expectedResult);
	});

	// Exception test 1
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = 12;
		const resistance = undefined;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 2
	it('Should throw an error if either parameter is undefined', () => {
		const voltage = undefined;
		const resistance = 12;
		const err = new Error('One of the parameters is undefined');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	//Exception test 3
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 12;
		const resistance = 'string';
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 4
	it('Should throw an error if either parameter is not a number', () => {
		const voltage = 'string';
		const resistance = 12;
		const err = new Error('Both parameters must be numbers');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 5
	it('Should throw an error if either number is negative', () => {
		const voltage = 12;
		const resistance = -12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});

	// Exception test 6
	it('Should throw an error if either number is negative', () => {
		const voltage = -12;
		const resistance = 12;
		const err = new Error('Both parameters must be positive numbers greater than zero');

		const errCb = () => {
			powerFromVoltRes(voltage, resistance);
		};

		expect(errCb).toThrowError(err);
	});
});
