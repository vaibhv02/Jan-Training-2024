import React, {useState} from "react";

const ReadOnlyStateExample =()=>{
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        age: 23,
        email: 'john.doe@example.com',
        city: 'Mohali'
    })

    return(
        <div>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Email: {userInfo.email}</p>
            <p>City: {userInfo.city}</p>
            <button onClick={()=>setUserInfo('this is the user info')}>Update</button>
        </div>
    )
}

export default ReadOnlyStateExample;