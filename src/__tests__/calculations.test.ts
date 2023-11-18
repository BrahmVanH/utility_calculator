import { currentFromVoltRes, voltageFromCurRes, resistanceFromVoltCur, powerFromVoltCurr, poweFromCurrRes, powerFromVoltRes } from "../utils/calculations";

describe('calculates current/amperage from given voltage and resistance', () => {
  // Test case 1
  it('Should return a positive number given two positive numvers', () => {
    const expectedResult = 25;
    const result = currentFromVoltRes(5, 5);
    expect(result).toBe(expectedResult)
  })
})