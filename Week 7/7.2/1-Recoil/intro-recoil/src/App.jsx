
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
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
function Buttons(){
  const [count, setCount]=useRecoilState(countAtom);
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
}
export default App