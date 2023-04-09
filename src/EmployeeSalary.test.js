
const { calculateNetSal } = require("./salaryuts");

test("calculateNetSal calculates net salary correctly", () => {
  const grossSalary = 45000;
  const expectedNetSalary = 35555.35;
  expect(calculateNetSal(grossSalary)).toBe(expectedNetSalary);
});

test("calculateNetSal returns 0 for gross salary <= 0", () => {
  const grossSalary = 0;
  expect(calculateNetSal(grossSalary)).toBe(0);
});

test("calculateNetSal returns 0 for negative gross salary", () => {
  const grossSalary = -10000;
  expect(calculateNetSal(grossSalary)).toBe(0);
});

test("calculateNetSal calculates correct values for gross salary in lower tax bracket", () => {
  const grossSalary = 30000;
  const expectedNetSalary = 23823.35;
  expect(calculateNetSal(grossSalary)).toBe(expectedNetSalary);
});

test("calculateNetSal calculates correct values for gross salary in upper tax bracket", () => {
  const grossSalary = 60000;
  const expectedNetSalary = 46311.95;
  expect(calculateNetSal(grossSalary)).toBe(expectedNetSalary);
});




// const { calculateNetSal } = require("./salaryuts");

// test("calculateNetSalary calculates net salary correctly", () => {
//   const grossSalary = 45000;
//   const expectedNetSalary = 40098;
//   expect(calculateNetSalary(grossSalary)).toBe(expectedNetSalary);
// });

// test("calculateNetSalary returns 0 for gross salary <= 0", () => {
//   const grossSalary = 0;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSalary returns 0 for negative gross salary", () => {
//   const grossSalary = -10000;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSalary calculates correct values for gross salary in lower tax bracket", () => {
//   const grossSalary = 30000;
//   const expectedNetSalary = 22124.8;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });

// test("calculateNetSalary calculates correct values for gross salary in upper tax bracket", () => {
//   const grossSalary = 60000;
//   const expectedNetSalary = 41611.25;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });

// import { calculateNetSal } from "./salaryuts";

// test("calculateNetSal calculates net salary correctly", () => {
//   const grossSalary = 45000;
//   const expectedNetSalary = 40098;
//   expect(calculateNetSal(grossSalary)).toBe(expectedNetSalary);
// });

// test("calculateNetSal returns 0 for gross salary <= 0", () => {
//   const grossSalary = 0;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSal returns 0 for negative gross salary", () => {
//   const grossSalary = -10000;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSal calculates correct values for gross salary in lower tax bracket", () => {
//   const grossSalary = 30000;
//   const expectedNetSalary = 27726.95;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });

// test("calculateNetSal calculates correct values for gross salary in upper tax bracket", () => {
//   const grossSalary = 60000;
//   const expectedNetSalary = 41611.25;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });

// const { calculateNetSal } = require("./salaryuts");

// test("calculateNetSal calculates net salary correctly", () => {
//   const grossSalary = 45000;
//   const expectedNetSalary = 40098;
//   expect(calculateNetSal(grossSalary)).toBe(expectedNetSalary);
// });

// test("calculateNetSal returns 0 for gross salary <= 0", () => {
//   const grossSalary = 0;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSal returns 0 for negative gross salary", () => {
//   const grossSalary = -10000;
//   expect(calculateNetSal(grossSalary)).toBe(0);
// });

// test("calculateNetSal calculates correct values for gross salary in lower tax bracket", () => {
//   const grossSalary = 30000;
//   const expectedNetSalary = 22124.8;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });

// test("calculateNetSal calculates correct values for gross salary in upper tax bracket", () => {
//   const grossSalary = 60000;
//   const expectedNetSalary = 41611.25;
//   expect(calculateNetSal(grossSalary)).toBeCloseTo(expectedNetSalary, 2);
// });


