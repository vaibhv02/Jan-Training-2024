import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleSignup = () => {
    // Add your signup logic here
    console.log("Signing up with:", name, email, password);
  };

  return (
    <div className="signup-container">
      <h1 className="heading">Sign Up</h1>
      <label className="label">
        Name:
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
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
      <button className="button" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
