import React from 'react'
import "./Components.css"



function Sign() {
    return (
    <form className="form" >
        <h1 className="text">Sign-up Here!!</h1>
        <div className="Sign">
            <h2>User-Name</h2>
<input className="inputt"  ></input>
<h2>E-mail</h2>
<input className="inputt" ></input>

<h2>Password</h2>
<input className="inputt"    ></input>
<h2>Repeat-Password</h2>
<input className="inputt"     ></input></div>

<button className="btns" type="submit">Submit</button>
    </form>
        )
}

export default Sign
