import { useState } from 'react'
//a simple counter app
function App() {
  const [count, setCount] = useState(0)
  console.log('hi there from app.jsx');
  return (
    <div>
     <button onClick={function(){setCount(count+1)}}>counter:{count}</button>
    </div>
  )
}

export default App
