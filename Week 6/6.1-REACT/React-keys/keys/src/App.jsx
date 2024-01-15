import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
let's create a simple todo :
1. Create a Todo component that accepts title, description as input
2. Initialize a state array that has 3 todos
3. Iterate over the array to render all the TODOs
4. A button in the top level app component to add a new TODO
 */
let counter=5;
function App() {
  
  const [todos,setTodos] = useState([{id:1,title:'title1', description:'description1'},{id:2,title:'title2', description:'description2'}
,{title:'title3', description:'description3'}]);

  function addTodo(props){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }
  function Todo ({title , description}){
    return (
    <>
    <h1>{title}</h1>
    <h5>{description}</h5>
    </>
    );
  }

  return (
    <>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(function(todo){
          return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
        })}
    </>
      );
    }


export default App
