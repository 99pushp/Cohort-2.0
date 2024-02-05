
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./statemgnt/count";

function App() {

  return (
    <>
    <RecoilRoot>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
    <EvenChecker></EvenChecker>
    </RecoilRoot>
    </>
  )
}


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

function EvenChecker(){
  const count = useRecoilValue(evenSelector);
  if(count%2==0){
    return(
      <>
      even number
      </>
    )
  }
  return(
    <>
      not even
    </>
  )
}
export default App