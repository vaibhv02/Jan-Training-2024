import React,{useState} from "react";

const ReadStateExample=()=>{
    const [message , setMessage]=useState("hello, React!")
    return(
        <div>
            <h2>Reading state in react</h2>
            <p>Current message: {message}</p>
            <button onClick={()=>setMessage("this is new message")}>
                Change message
            </button>
        </div>
    )
}

export default ReadStateExample;