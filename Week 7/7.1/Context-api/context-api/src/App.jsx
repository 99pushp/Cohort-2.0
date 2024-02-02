
import {useContext, useState} from "react";
import { CountContext } from "./context";

function App() {
 const [count, setCount] = useState(0);
 //wrap anyone that wants to use the teleported value inside the provider
  return (
    <>
    <CountContext.Provider value={count}>
    <Count count={count} setCount={setCount}></Count>
    </CountContext.Provider>
      
      
    </>
  )
}


function Count({count, setCount}){
  return(
<div>
   <CountRenderer count={count}></CountRenderer>
  <Buttons count={count} setCount={setCount}></Buttons>
</div>
)}

function CountRenderer(){
  const count = useContext(CountContext);
  return(
    <div>
      count is : {count}
    </div>
  )
}
function Buttons({ setCount}){
  const count = useContext(CountContext);
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
}
export default App