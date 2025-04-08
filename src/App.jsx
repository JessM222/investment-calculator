import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

const InitialInput = {
  initialInvestment: 100,
  annualInvestment: 10,
  expectedReturn: 3,
  duration: 3,
};

function App() {
  const [currentInputs, setInputs] = useState(InitialInput);
  const inputIsValid = currentInputs.duration >= 1;

  function handleInputChange(nameOfChangedInput, newValue) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [nameOfChangedInput]: +newValue,
    }));

    console.log(",,,,,,", newValue);
  }

  console.log(currentInputs);
  console.log("!!!><", typeof currentInputs.initialInvestment);
  return (
    <main>
      <Header />
      <InputGroup inputs={currentInputs} onChangeInput={handleInputChange} />
      {inputIsValid ? (
        <Result inputs={currentInputs} />
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Please enter a valid number
        </p>
      )}
    </main>
  );
}

export default App;
