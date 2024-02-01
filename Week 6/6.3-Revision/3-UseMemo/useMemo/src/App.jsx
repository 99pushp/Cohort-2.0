import { useState } from 'react'
import {useEffect} from 'react'
import {useMemo} from 'react'
function App() {
  const [bankDetails, setbankDetails] = useState({});
  const [bankDetails2, setbankDetails2] = useState({});
  const [exchangeDetails, setexchangeDetails] = useState({});
  
 console.log('no rerender');

  useEffect(()=>{setTimeout(()=>{setbankDetails({income :1000})},1000)},[])
  useEffect(()=>{setTimeout(()=>{setbankDetails2({income :10000})},2000)},[])
  useEffect(()=>{setTimeout(()=>{setexchangeDetails({income :2000})},3000);},[])

  const allbankdetails = useMemo(()=>{return bankDetails.income + bankDetails2.income;}, [bankDetails,bankDetails2] )
  //use memo can returned a cached value but useEffect cannot
  const tax = 0.3*allbankdetails*exchangeDetails.income;
  

  //when we want to memoise a function we use usecallback
  return (
    <>
      the tax is as follows:{tax};
    </>
  )
}

export default App