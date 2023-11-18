// Volume
// Area
// Voltage
// Wattage
// Resistance
// Amperage


// Find current (amperage) from Voltage and Resistance
export const currentFromVoltRes = (voltage: number, resistance: number): number => {
  return voltage / resistance;
}

// Find voltage using current and resistance 
export const voltageFromCurRes = (current: number, resistance: number): number => {
  return current * resistance;
}

// Find resistance using voltage and current
export const resistanceFromVoltCur = (voltage: number, current: number): number => {
  return voltage / current;
}

// Find power using voltage and current 
export const powerFromVoltCurr = (voltage: number, current: number): number => {
  return voltage * current;
};

// Find power using current and resistance 
export const poweFromCurrRes = (current: number, resistance: number): number => {
  return (Math.pow(current, 2) * resistance);
}

// Find power using voltage and resistance
export const powerFromVoltRes = (voltage: number, resistance: number): number => {
  return (Math.pow(voltage, 2) / resistance);
}

