import React, { useState } from "react";
import "./App.css";
import Login from "./assets/Components/login/Login";
import Signup from "./assets/Components/signup/Signup";

const App = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const [state, setState] = useState(0);

  return (
    // <div className="container">
    //   {isLogin ? <Login /> : <Signup />}
    //   <p>
    //     {isLogin ? "Don't have an account? " : "Already have an account? "}
    //     <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
    //       {isLogin ? "Sign Up" : "Login"}
    //     </button>
    //   </p>
    // </div>
    <div className="App">
    <button
      onClick={() => {
        for (let i = 0; i < 4; i++) {
          setState(state + i);
        }
      }}
    >
      counter
    </button>
    <span>{state}</span>
  </div>
  );
};

export default App;
