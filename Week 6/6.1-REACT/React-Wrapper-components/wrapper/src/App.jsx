import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//WRAPPER
function App(){
  return <div>
    <CardWrapper>i am a children</CardWrapper>
    <CardWrapper><b>i am in bold children</b></CardWrapper>
  </div>
}

function CardWrapper({children}){
  return(<div style={{border:"2px solid pink"}}>
{children}
  </div>)
}

export default App