import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
const [selectedid,setID]=useState(1);


return (<div>
  <button onClick={function(){setID(1)}} >1</button>
  <button onClick={function(){setID(2)}}>2</button>
  <button onClick={function(){setID(3)}}>3</button>
  <button onClick={function(){setID(4)}}>4</button>

  <Todo id={selectedid}></Todo>
</div>)

 
}

function Todo({id}){

  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then(function(response) {
        setTodos(response.data.todos);
      })
      .catch(function(error) {
        console.error("Error fetching data:", error);
        // Handle the error state here
      });
  }, [id]);
    return(<div>
      <div>{todos.title}</div>
      <div>{todos.description}</div>
    </div>)

}


export default App;
