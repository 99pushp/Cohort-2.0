import { useCallback } from 'react';
import { useState ,memo} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  var a = useCallback( function(){
    console.log('function a');
  },[]);

  return (
    <>
    <button onClick={()=>{
      setCounter(counter +1);
    }}>Counter ({counter})</button>

    <Demo a={a}></Demo>
    </>
  )
}

const Demo = memo(function ({a}){
  console.log("rerender");
  return <div> hi there</div>
})

export default App
