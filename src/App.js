import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  //addition is done here
  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };
  // subtraction is done here
  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };
  //multiply is done here
  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };
  //division is done here
  const handleDivide = () => {
    setResult(Number(num1) / Number(num2));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculation</h1>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
        </div>
        <h2>Result: {result}</h2>
        <h5>Here is yours Calculation</h5>
      </header>
    </div>
  );
}

export default App;
