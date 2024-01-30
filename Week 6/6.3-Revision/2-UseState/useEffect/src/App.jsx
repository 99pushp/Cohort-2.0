import { useState } from 'react'
import {useEffect} from 'react'
function App() {
  const [bankDetails, setbankDetails] = useState({});
  const [exchangeDetails, setexchangeDetails] = useState({});
  
 console.log('no rerender');

  useEffect(()=>{setTimeout(()=>{setbankDetails({income :1000})},1000)},[])
  useEffect(()=>{setTimeout(()=>{setexchangeDetails({income :2000})},3000);},[])
  
  const tax = 0.3*bankDetails.income*exchangeDetails.income;

  return (
    <>
      the tax is as follows:{tax};
    </>
  )
}

export default App
