import React from 'react';

function Login(props) {
    return (
        <div className="App container"> 
           
            <h1>
                Please Login
            </h1>
            <br />
            <br />
            <div className="mb-3">
                <label htmlFor ="username" className="form-label" >Username</label>
                <input type="text" className="form-control" id="username" placeholder ="Please Enter your Username" />
            </div>
            <div className="mb-3">
                <label htmlFor ="username" className="form-label" >password</label>
                <input type="password" className="form-control" id="username" placeholder ="Please Enter your Password" />
            </div>
        </div>
    );
}

export default Login;