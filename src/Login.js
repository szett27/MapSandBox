import * as React from 'react';

export default function Login(){

    const[credentials, setCredentials] = React.useState({
        userName: "",
        password: "",
    })

    const[timesTried, setTimesTried] = React.useState(0);
    
    if(timesTried < 3){
        return(
        <div id = "login">
        <form>
        <h3>UserName</h3>
        <input type = "text" onChange={(e)=>console.log(`Username: ${e.target.value}`)}></input>
        <h3>Password</h3>
        <input type = "password" onChange={(e)=>console.log(`Password: ${e.target.value}`)}></input>
        </form>
        <button onClick={()=>setTimesTried(timesTried + 1)}>Submit</button>
        {console.log(`Times Tried: ${timesTried}`)}
        </div>
        )
    }
    else {
        return(
            <div id = 'loginFailed'>
                <h1>Exceeded Number of Login Tries</h1>
                <button onClick={()=>setTimesTried(0)}>Unlock Account</button>
            </div>
        )
    }
}