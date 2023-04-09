const puppeteer = require('puppeteer');
const { calculateNetSalary } = require('./salaryUtils');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000'); // replace with your app URL

  // enter the gross salary in the input field
  await page.type('input[type=number]', '50000');

  // click the calculate button
  await page.click('button');

  // wait for the salary breakdown to be displayed
  await page.waitForSelector('h2');

  // extract the values of the salary breakdown
  const nhifDeduction = await page.$eval('p:nth-of-type(1) strong', el => el.textContent);
  const nssfDeduction = await page.$eval('p:nth-of-type(2) strong', el => el.textContent);
  const taxableIncome = await page.$eval('p:nth-of-type(3) strong', el => el.textContent);
  const taxDeduction = await page.$eval('p:nth-of-type(4) strong', el => el.textContent);
  const netSalary = await page.$eval('p:nth-of-type(5) strong', el => el.textContent);

  // compare the extracted values with the expected values
  const expectedValues = calculateNetSalary(50000);
  if (nhifDeduction === expectedValues.nhifDeduction.toString() &&
      nssfDeduction === expectedValues.nssfDeduction.toString() &&
      taxableIncome === expectedValues.taxableIncome.toString() &&
      taxDeduction === expectedValues.taxDeduction.toString() &&
      netSalary === expectedValues.netSalary.toString()) {
    console.log('Acceptance test passed!');
  } else {
    console.log('Acceptance test failed!');
  }

  await browser.close();
})();
