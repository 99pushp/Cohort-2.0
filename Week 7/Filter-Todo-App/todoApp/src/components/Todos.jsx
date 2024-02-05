import { useRecoilState } from "recoil"
import { todoState } from "../states/atoms/todoAtoms"
import { useState } from "react";

import Todo from "./Todo";

export default function Todos(){
   const [todos, setTodos] = useRecoilState(todoState);
   const [inputText,setInputText] = useState('');

   function addTodo(){
    setTodos((prevTodos)=>[...prevTodos,{id:Math.random(), text:inputText}]);
    setInputText('');
   }

   function clearTodo(){
    setTodos([]);
   }

   function handleInputChange(e){
    setInputText(e.target.value);
   }
console.log(todos);
    return(
        <>
        <input type="text" id="todoTitle" placeholder="Title" onChange={handleInputChange}></input>
        <div></div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodo}>Clear Todo</button>
        {
            todos.map((todo)=>{
                return(
                    <Todo key={todo.id} text={todo.text} id={todo.id}/>
                )
            })
        }
        <div></div>
        </>
    )
}