function calculateNetSalary(grossSalary) {
  const nhifRates = [0, 150, 300, 400, 500, 600, 750, 850, 900, 1000];
  const nhifDeductions = [0, 150, 300, 400, 500, 600, 750, 850, 900, 1000];

  let nhifDeduction = 0;
  let nssfDeduction = 0;
  let taxableIncome = 0;
  let taxDeduction = 0;
  let netSalary = 0;

  if (grossSalary <= 6000) {
    nssfDeduction = 0.06 * grossSalary;
  } else if (grossSalary > 6000 && grossSalary <= 18000) {
    nssfDeduction = 360;
  } else if (grossSalary > 18000) {
    nssfDeduction = 480;
  }

  for (let i = 0; i < nhifRates.length; i++) {
    if (grossSalary <= nhifRates[i]) {
      nhifDeduction = nhifDeductions[i];
      break;
    }
  }

  taxableIncome = grossSalary - nssfDeduction - nhifDeduction - 1408;

  if (taxableIncome <= 12298) {
    taxDeduction = 0;
  } else if (taxableIncome > 12298 && taxableIncome <= 23885) {
    taxDeduction = 0.1 * (taxableIncome - 12298);
  } else if (taxableIncome > 23885 && taxableIncome <= 35472) {
    taxDeduction = 0.15 * (taxableIncome - 23885) + 1159;
  } else if (taxableIncome > 35472 && taxableIncome <= 47059) {
    taxDeduction = 0.2 * (taxableIncome - 35472) + 2894;
  } else if (taxableIncome > 47059 && taxableIncome <= 58646) {
    taxDeduction = 0.25 * (taxableIncome - 47059) + 4894;
  } else if (taxableIncome > 58646 && taxableIncome <= 70833) {
    taxDeduction = 0.3 * (taxableIncome - 58646) + 7549;
  } else {
    taxDeduction = 0.35 * (taxableIncome - 70833) + 13797;
  }

  netSalary = grossSalary - nssfDeduction - nhifDeduction - taxDeduction;

  return {
    nhifDeduction,
    nssfDeduction,
    taxableIncome,
    taxDeduction,
    netSalary,
  };
}

export { calculateNetSalary };
