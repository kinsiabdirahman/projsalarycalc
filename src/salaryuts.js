function calculateNetSal(grossSalary) {
  if (grossSalary <= 0) {
    return 0;
  }

  const nssfDeduction = Math.min(grossSalary * 0.12, 2760);
  const taxableIncome = grossSalary - nssfDeduction - 1408;
  let taxDeduction = 0;
  let nhifDeduction = 0;

  if (taxableIncome > 0) {
    if (taxableIncome <= 12298) {
      taxDeduction = taxableIncome * 0.1;
    } else if (taxableIncome <= 23885) {
      taxDeduction = 1229.8 + (taxableIncome - 12298) * 0.15;
    } else if (taxableIncome <= 35472) {
      taxDeduction = 1229.8 + 1797.45 + (taxableIncome - 23885) * 0.2;
    } else if (taxableIncome <= 47059) {
      taxDeduction = 1229.8 + 1797.45 + 2317.4 + (taxableIncome - 35472) * 0.25;
    } else {
      taxDeduction =
        1229.8 + 1797.45 + 2317.4 + 2951.5 + (taxableIncome - 47059) * 0.3;
    }
  }

  const netSalary = grossSalary - nssfDeduction - taxDeduction - nhifDeduction;
  return netSalary;
}

export { calculateNetSal };
