import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodo } from './Compoments/CreateTodo'
import {Todos} from './Compoments/Todos'

function App() {
  const [todos, setTodos]= useState([]);

  //getting data from the BE
    fetch("http://localhost:3000/todos")
      .then((res)=>{
         return res.json();
      }).then((data)=>{
        setTodos(data.todos);
      })
      

     return (
      <div>
        <CreateTodo> </CreateTodo>  
        <Todos todos={todos}></Todos>
      </div>
     )
  
}

export default App
