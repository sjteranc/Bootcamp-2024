import { useState } from 'react';
import './App.css';

function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>count is {count}</h1>
      <h2>count factorial is {factorial(count)}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  );
}

export default App;
