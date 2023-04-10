import { useState } from "react";
import { calculateNetSalary } from "./salaryUtils";
import { Box, Heading } from "@chakra-ui/react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function EmployeeSalary() {
  const [grossSalary, setGrossSalary] = useState(0);
  const [nhifDeduction, setNhifDeduction] = useState(0);
  const [nssfDeduction, setNssfDeduction] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxDeduction, setTaxDeduction] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  

  

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
    <Box w='100%'
    h='1000px'
    bgGradient='linear(to-r, blue.200, blue.200, purple.300)'>

    <Heading color={"grey.100"} fontFamily={"Times new roman"} marginBottom={"2em"} textAlign="center">  
    {/* <div className="App"> */}
      <h1>Salary Calculator</h1>
      </Heading>
      
      <form>
        <Box>
      <FormControl>
        <FormLabel>Gross Salary:
        <Input type="text" value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)} width border="2px solid black"/></FormLabel><br />
      </FormControl>
     
        <Button type="button" onClick={handleCalculateNetSalary} colorScheme="black"
      size="md"
      variant="solid"
      _hover={{ bg: "black.700" }} border="2px solid black">
          Calculate Net Salary
        </Button>
        </Box>
      <br />
      <Heading color={"grey.100"} fontFamily={"Rampage Monoline"} marginBottom={"2em"} textAlign="center">  
      <h1>Salary Breakdown</h1>
      </Heading>

      <Box >
      <FormControl>
        <FormLabel border="2px solid black" w={250} h={10}>NHIF Deduction:
        <strong> {nhifDeduction} </strong></FormLabel><br />
      </FormControl>
      </Box>

      <Box >
      <FormControl>
        <FormLabel border="2px solid black" w={250} h={10}>NSSF Deduction:
        <strong> {nssfDeduction} </strong></FormLabel><br />
      </FormControl>
      </Box>

      <Box >
      <FormControl>
        <FormLabel border="2px solid black" w={250} h={10}>Taxable Income:
        <strong> {taxableIncome} </strong></FormLabel><br />
      </FormControl>
      </Box>
      <Box >
      <FormControl>
        <FormLabel border="2px solid black" w={250} h={10}>Tax Deduction:
        <strong> {taxDeduction} </strong></FormLabel><br />
      </FormControl>
      </Box>

      <Box >
      <FormControl>
        <FormLabel border="2px solid black" w={250} h={10}>Net Salary:
        <strong> {netSalary} </strong></FormLabel><br />
      </FormControl>
      </Box>
      </form>
    </Box>




  );
}



export default EmployeeSalary;


