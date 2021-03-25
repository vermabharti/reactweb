
import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

function Dashboard () {   
    
   
     const onLogOut = () => { 
             localStorage.clear();
             window.location.href = '/';
          
     } 
    const location = useLocation();
    console.log(location.state.detail.dataValue[0][1]);
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Welcome to DVDMS Central Dashboard {location.state.detail.dataValue[0][1]}</h1>
            <h2>click here with index {count}</h2>
            <button onClick= {() => setCount(count + 1)}>Click me for increse index</button>
            <button onClick={onLogOut} >Logout </button>
        </div>
    ); 
}
export default Dashboard;