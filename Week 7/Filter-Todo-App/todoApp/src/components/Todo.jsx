import { useSetRecoilState } from "recoil"
import { todoState } from "../states/atoms/todoAtoms"

export default function Todo({text,id}){
    const setTodos = useSetRecoilState(todoState)

    function deleteTodo(){
        setTodos((prevTodos) => {
            return prevTodos.filter((todo)=>todo.id!=id)
        })
    }
    return(
        <div>
            <p>{text}</p>
            <button onClick={deleteTodo}>x</button>
        </div>
    )
}