import { RecoilRoot, useRecoilValue } from "recoil";
import Todos from "./components/Todos";
import { totalTodos } from "./states/selectors/selector-todo";

function App() {
  const totalTodoState = useRecoilValue(totalTodos)
return(
  <>
  <h1>TODO-APP</h1>
  <Todos></Todos>
  <h3>total todos:{totalTodoState}</h3>
  </>
)
}
export default App;