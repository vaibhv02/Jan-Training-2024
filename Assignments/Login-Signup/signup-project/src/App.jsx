import React, { useState } from "react";
import "./App.css";
import Login from "./assets/Components/login/Login";
import Signup from "./assets/Components/signup/Signup";

const App = () => {

const[state,setState] = useState(0)

const handleClick = ()=>{
  for(let i = 0; i<4; i++){
    setState(state + i)
    console.log(state,"state<><><>><<>")
  }
}


  return (
    <div className="App">
      <button onClick={handleClick}>update</button>
      <div>
        {state}
      </div>
  </div>
  );
};

export default App;
