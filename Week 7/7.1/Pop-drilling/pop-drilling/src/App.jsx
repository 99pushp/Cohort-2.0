import {useState} from "react";

function App() {
 const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount}></Count>
      
    </>
  )
}
//here the function count doesn't actually need to use the setcount prop but we need to send it 
//down the line to be used by the components in the chain
//this passing down of the components is known as the prop drilling and we can avoid it by using the 
// context api by tele porting the props to down the the line rather passing throughout the line

function Count({count, setCount}){
  return(
<div>
   <CountRenderer count={count}></CountRenderer>
  <Buttons count={count} setCount={setCount}></Buttons>
</div>
)}

function CountRenderer({count}){
  return(
    <div>
      count is : {count}
    </div>
  )
}
function Buttons({count, setCount}){
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
}
export default App
