//hook
//importing the use state to defining the states in react
import {useState} from "react";

/*

function App() {
  const [count, setCount] = useState(0);
//defining the state of the project
//setCount is a function
//count is a variable

  function onClickHandler(){
    setCount(count+1);
  }
//logic meat of the code

  return (
    //defining the component button
   //{ }--> wrap the JS variables here
      <div>
        <button onClick={onClickHandler}>Counter {count}</button>
      </div>
  )
}

*/

function App(){
  const [count, setCount] = useState(0); // [1,2]

  return (
   <div>
   <CustomButton count={count} setCount={setCount}></CustomButton> 
   </div>

  );
}

//component
//props is the state variable which has been pass into the function
function CustomButton(props){

  function onClickHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>

}
/*This code is a React application written in JSX syntax and uses the useState hook to manage the state of a counter. Let me explain how it works:

    In the App component, a state variable count is declared using the useState hook, and its initial value is set to 0. The setCount function is used to update the value of the count state.

    The App component renders a div containing a CustomButton component. The count state and the setCount function are passed down to the CustomButton component as props.

    The CustomButton component receives the count and setCount props and renders a button. When the button is clicked, the onClickHandler function is triggered.

    Inside the onClickHandler function, the setCount function is called with the updated value of props.count + 1. This increments the counter.

    The rendered button displays the current count, which is passed as a prop from the App component.

So, when you click the button rendered by the CustomButton component, it triggers the onClickHandler function, updating the count in the App component through the setCount function. The updated count is then reflected in the UI.*/
export default App;
