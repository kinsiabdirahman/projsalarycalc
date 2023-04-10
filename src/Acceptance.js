const puppeteer = require('puppeteer');

describe('EmployeeSalary component', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://salarycalac-app.onrender.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('displays the "Gross Salary" input field', async () => {
    const grossSalaryInput = await page.$('input[type="text"]');
    expect(grossSalaryInput).not.toBeNull();
  });

  it('calculates net salary correctly', async () => {
    await page.type('input[type="text"]', '50000');
    await page.click('button[type="button"]');

    const nhifDeduction = await page.$eval('label:contains("NHIF Deduction:") strong', el => el.innerText);
    const nssfDeduction = await page.$eval('label:contains("NSSF Deduction:") strong', el => el.innerText);
    const taxableIncome = await page.$eval('label:contains("Taxable Income:") strong', el => el.innerText);
    const taxDeduction = await page.$eval('label:contains("Tax Deduction:") strong', el => el.innerText);
    const netSalary = await page.$eval('label:contains("Net Salary:") strong', el => el.innerText);

    expect(nhifDeduction).toBe('500');
    expect(nssfDeduction).toBe('1100');
    expect(taxableIncome).toBe('47900');
    expect(taxDeduction).toBe('7983.33');
    expect(netSalary).toBe('3916.67');
  });
});
