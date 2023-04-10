import "./App.css";
import EmployeeSalary from "./EmployeeSalary";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
    <div>
      
      <EmployeeSalary />
    </div>
    </ChakraProvider>
  );
}

export default App;

