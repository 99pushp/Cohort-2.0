
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {

  return (
    <>
    <RecoilRoot>
    <Count ></Count>
    </RecoilRoot>
    </>
  )
}


function Count(){

  console.log('xxx')
  return(
    
<div>
   
   <CountRenderer ></CountRenderer>
  <Buttons></Buttons>
</div>
)}

function CountRenderer(){
 //need only value of count
 const count = useRecoilValue(countAtom);
  return(
    <div>
      count is : {count}
    </div>
  )
}
//this will stop rerendering button also
function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return(
    <>
    <button onClick={()=>{setCount(c=>c+1)}}>Increase</button>
    <button onClick={()=>{setCount(c=>c-1)}}>Decrease</button>
    </>
  )
}
export default App