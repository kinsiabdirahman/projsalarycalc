import { useState } from "react";
import { calculateNetSalary } from "./salaryUtils";

function EmployeeSalary() {
  const [grossSalary, setGrossSalary] = useState(0);
  const [nhifDeduction, setNhifDeduction] = useState(0);
  const [nssfDeduction, setNssfDeduction] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxDeduction, setTaxDeduction] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  // function calculateNetSalary() {
  //   const nhifRates = [0, 150, 300, 400, 500, 600, 750, 850, 900, 1000];
  //   const nhifDeductions = [0, 150, 300, 400, 500, 600, 750, 850, 900, 1000];

  //   let nhifDeduction = 0;
  //   let nssfDeduction = 0;
  //   let taxableIncome = 0;
  //   let taxDeduction = 0;
  //   let netSalary = 0;

  //   if (grossSalary <= 6000) {
  //     nssfDeduction = 0.06 * grossSalary;
  //   } else if (grossSalary > 6000 && grossSalary <= 18000) {
  //     nssfDeduction = 360;
  //   } else if (grossSalary > 18000) {
  //     nssfDeduction = 480;
  //   }

  //   for (let i = 0; i < nhifRates.length; i++) {
  //     if (grossSalary <= nhifRates[i]) {
  //       nhifDeduction = nhifDeductions[i];
  //       break;
  //     }
  //   }

  //   taxableIncome = grossSalary - nssfDeduction - nhifDeduction - 1408;

  //   if (taxableIncome <= 12298) {
  //     taxDeduction = 0;
  //   } else if (taxableIncome > 12298 && taxableIncome <= 23885) {
  //     taxDeduction = 0.1 * (taxableIncome - 12298);
  //   } else if (taxableIncome > 23885 && taxableIncome <= 35472) {
  //     taxDeduction = 0.15 * (taxableIncome - 23885) + 1159;
  //   } else if (taxableIncome > 35472 && taxableIncome <= 47059) {
  //     taxDeduction = 0.2 * (taxableIncome - 35472) + 2894;
  //   } else if (taxableIncome > 47059 && taxableIncome <= 58646) {
  //     taxDeduction = 0.25 * (taxableIncome - 47059) + 4894;
  //   } else if (taxableIncome > 58646 && taxableIncome <= 70833) {
  //     taxDeduction = 0.3 * (taxableIncome - 58646) + 7549;
  //   } else {
  //     taxDeduction = 0.35 * (taxableIncome - 70833) + 13797;
  //   }

  //   netSalary = grossSalary - nssfDeduction - nhifDeduction - taxDeduction;

  //   setNhifDeduction(nhifDeduction);
  //   setNssfDeduction(nssfDeduction);
  //   setTaxableIncome(taxableIncome);
  //   setTaxDeduction(taxDeduction);
  //   setNetSalary(netSalary);
  // }

  function handleCalculateNetSalary() {
    const {
      nhifDeduction,
      nssfDeduction,
      taxableIncome,
      taxDeduction,
      netSalary,
    } = calculateNetSalary(grossSalary);
    setNhifDeduction(nhifDeduction);
    setNssfDeduction(nssfDeduction);
    setTaxableIncome(taxableIncome);
    setTaxDeduction(taxDeduction);
    setNetSalary(netSalary);
  }

  return (
    <div className="App">
      <h1>Salary Calculator</h1>
      <form>
        <label>
          Gross Salary:
          <input
            type="number"
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="button" onClick={handleCalculateNetSalary}>
          Calculate Net Salary
        </button>
      </form>
      <br />
      <h2>Salary Breakdown</h2>
      <p>
        NHIF Deduction: <strong>{nhifDeduction}</strong>
      </p>
      <p>
        NSSF Deduction: <strong>{nssfDeduction}</strong>
      </p>
      <p>
        Taxable Income: <strong>{taxableIncome}</strong>
      </p>
      <p>
        Tax Deduction: <strong>{taxDeduction}</strong>
      </p>
      <p>
        Net Salary: <strong>{netSalary}</strong>
      </p>
    </div>
  );
}

export default EmployeeSalary;
