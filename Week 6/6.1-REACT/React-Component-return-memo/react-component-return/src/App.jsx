import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//this is app component

function App() {
  let [title,setTitle]=useState('gym');
  //HeaderComponent(title); this is not a function but a component 

  function Clickhandler(){
    setTitle(Math.random());
  }

  return (
    <div>
      <HeaderComponent title = {"hello"}></HeaderComponent>
      <HeaderComponent title = {"hellod"}></HeaderComponent>
      <HeaderComponent title = {"helldo"}></HeaderComponent>
      <HeaderComponent title = {"helldso"}></HeaderComponent>
      <HeaderComponent title = {title}></HeaderComponent>
      <ButtonComponent onClickfunc={Clickhandler}></ButtonComponent>
      </div>
  );
}
//this is a button component
function ButtonComponent({onClickfunc}){
  return(
    <button onClick={onClickfunc}>Click here to change title</button>
  );
}
//this is a header component
const HeaderComponent = React.memo(function HeaderComponent(prop){
  return (
    <div>
      the title is as follows:
      <b>{prop.title}</b>
    </div>
  );
  })

export default App
