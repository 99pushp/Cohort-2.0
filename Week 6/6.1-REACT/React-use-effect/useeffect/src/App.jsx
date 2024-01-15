import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])


  useEffect(()=>{

    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res)=>{
        const json = await res.json();
        setTodos(json.todos);
        console.log(json);
      })
    }, 5000);
    

  },[])


  return (
    <>
     
      {todos.map(todo=> <TodoComponent key={todo.key} title={todo.title} description={todo.description}></TodoComponent>)}
    </>
  )
}
function TodoComponent({title,description}){
return(
  <>
  <h1>{title}</h1>
  <h5>{description}</h5>
  </>
)
}
export default App
