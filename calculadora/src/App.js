import { useState, useRef } from "react";
import "./components/buttonLM.css";
import "./components/buttonDM.css";
import "./components/buttomCommon.css"

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = '';
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  };
 
  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className={`calculator-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="calculator-title">Calculadora</h1>
      <div className="result-display">{result}</div>
      <input
        className="calculator-input"
        pattern="[0-9]*"
        ref={inputRef}
        type="number"
        placeholder="Ingresa un número"
      />
      <div className="button-grid">
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>×</button>
        <button onClick={divide}>÷</button>
        <button onClick={resetInput}>C</button>
        <button onClick={resetResult}>AC</button>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}


export default App;