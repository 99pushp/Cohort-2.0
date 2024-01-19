import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  function Counter() {
    console.log('in counter')
    setCount(count+1);
  }

  function SumCalc(e) {
   console.log('SUM CALC FUNCTION')
    let n = e.target.value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    setSum(sum);
  }

  return (
    <>
      <input type='number' placeholder='Enter Number here' onChange={SumCalc}></input>
      <br></br>
      <div>the sum is :{sum}</div>
      <br></br>
      <button onClick={Counter}>Click me {count}</button>
      
    </>
  );
}

export default App;
