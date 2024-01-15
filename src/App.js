import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    setResult((prev) => prev + parseInt(value));
    setValue("");
  };

  const handleSubtract = () => {
    setResult((prev) => prev - value);
    setValue("");
  };

  const handleMultiply = () => {
    setResult((prev) => prev * value);
    setValue("");
  };

  const handleDivide = () => {
    setResult((prev) => prev / value);
    setValue("");
  };

  const handleChange = (val) => {
    setValue(val);
  };

  const Buttons = ({ children }) => {
    return (
      <div className="buttons">
        {React.Children.map(children, (child, index) => {
          console.log(child);
          return child;
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <h2>Simplest Working Calculator</h2>
      <p>{result}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <a href="https://kun.uz">Kunuz saytiga o'tish</a>
      <Buttons>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <button onClick={() => setValue("")}>Reset input</button>
        <button onClick={() => setResult(0)}>Reset result</button>
      </Buttons>
    </div>
  );
}

export default App;
