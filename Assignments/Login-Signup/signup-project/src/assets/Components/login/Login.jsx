import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <h1 className="heading">Login</h1>
      <label className="label">
        Email:
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Password:
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
