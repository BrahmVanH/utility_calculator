// Find current (amperage) from Voltage and Resistance
export const currentFromVoltRes = (voltage: number, resistance: number): number => {
  if (!voltage || !resistance) {
    throw new Error("Voltage or resistance is undefined");
  } else if (typeof voltage != 'number' || typeof resistance != 'number') {
    throw new Error("Voltage and resistance must be numbers");
  } else if (voltage < 0 || resistance < 0) {
    throw new Error('Both parameters must be positive numbers');
  }
   return voltage / resistance;
}

// Find voltage using current and resistance 
export const voltageFromCurRes = (current: number, resistance: number): number => {
  if (!current || !resistance) {
		throw new Error('Current or resistance is undefined');
	} else if (typeof current != 'number' || typeof resistance != 'number') {
		throw new Error('Both parameters must be numbers');
	} else if (current < 0 || resistance < 0) {
		throw new Error('Both parameters must be positive numbers');
	}
  return current * resistance;
}

// Find resistance using voltage and current
export const resistanceFromVoltCur = (voltage: number, current: number): number => {
  if (!voltage || !current) {
		throw new Error('One of the parameters is undefined');
	} else if (typeof voltage != 'number' || typeof current != 'number') {
		throw new Error('Both parameters must be numbers');
	} else if (voltage < 0 || current < 0) {
		throw new Error('Both parameters must be positive numbers');
	}
  return voltage / current;
}

// Find power using voltage and current 
export const powerFromVoltCurr = (voltage: number, current: number): number => {
  if (!voltage || !current) {
		throw new Error('One of the parameters is undefined');
	} else if (typeof voltage != 'number' || typeof current != 'number') {
		throw new Error('Both parameters must be numbers');
	} else if (voltage < 0 || current < 0) {
		throw new Error('Both parameters must be positive numbers');
	}
  return voltage * current;
};

// Find power using current and resistance 
export const powerFromCurrRes = (current: number, resistance: number): number => {
   if (!current || !resistance) {
			throw new Error('One of the parameters is undefined');
		} else if (typeof current != 'number' || typeof resistance != 'number') {
			throw new Error('Both parameters must be numbers');
		} else if (current < 0 || resistance < 0) {
			throw new Error('Both parameters must be positive numbers');
		}
  return (Math.pow(current, 2) * resistance);
}

// Find power using voltage and resistance
export const powerFromVoltRes = (voltage: number, resistance: number): number => {
  if (!voltage || !resistance) {
		throw new Error('One of the parameters is undefined');
	} else if (typeof voltage != 'number' || typeof resistance != 'number') {
		throw new Error('Both parameters must be numbers');
	} else if (voltage < 0 || resistance < 0) {
		throw new Error('Both parameters must be positive numbers');
	}
  return (Math.pow(voltage, 2) / resistance);
}

