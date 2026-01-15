import { divide } from "../src/calculator.js";

describe("divide(a, b)", () => {
  //One positive test
  test("correct result when inputs are valid numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 5 negative tests

  test("throws an error when first input is not a number", () => {
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  test("throws an error when second input is not a number", () => {
    expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
  });

  test("throws an error when first input is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
  });

  test("throws an error when second input is NaN", () => {
    expect(() => divide(10, NaN)).toThrow("Arguments cannot be NaN");
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
