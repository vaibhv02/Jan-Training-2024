import React, { useState } from "react";

const SetSimpleExample = () => {
  const [name, setName] = React.useState("Vaibhav");
  const [age, setAge] = React.useState(24);
  const [roll, setRoll] = React.useState(3090);
  const [scmarks, setScMarks] = React.useState(100);
  const [mamarks, setMaMarks] = React.useState(100);
  const [phymarks, setPhyMarks] = React.useState(100);
  const [engmarks, setEngMarks] = React.useState(100);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Roll.No : {roll}</p>
      <p>Science Marks : {scmarks}</p>
      <p>Math Marks : {mamarks}</p>
      <p>Physics Marks : {phymarks}</p>
      <p>English Marks : {engmarks}</p>
      <br />
      <br />
      <br />
      <p>Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      ></input>
      
      <p>Age</p>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      ></input>
      <br></br>

      <p>Roll No.</p>
      <input
        type="text"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder="Enter your roll.no"
      ></input>
      <br></br>
      
      <p>Science Marks</p>
      <input
        type="text"
        value={scmarks}
        onChange={(e) => setScMarks(e.target.value)}
        placeholder="Enter your science marks"
      ></input>
      <br></br>
      
      <p>Maths Marks</p>
      <input
        type="text"
        value={mamarks}
        onChange={(e) => setMaMarks(e.target.value)}
        placeholder="Enter your maths marks"
      ></input>
      <br></br>
      
      <p>Physics Marks</p>
      <input
        type="text"
        value={phymarks}
        onChange={(e) => setPhyMarks(e.target.value)}
        placeholder="Enter your physics marks"
      ></input>
      <br></br>
     
      <p>English Marks</p>
      <input
        type="text"
        value={engmarks}
        onChange={(e) => setEngMarks(e.target.value)}
        placeholder="Enter your english marks"
      ></input>
    </div>
  );
};

export default SetSimpleExample;
