import React,{useState,useEffect}from 'react';
import APIser from '../APIser';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
function Login(props) {
    const [username,SetUsername] =useState('')
    const [password,SetPassword] = useState('')
    const[token,setToken] = useCookies(['mytoken'])
    let history = useHistory()

    useEffect(()=>{
        if(token['mytoken']) {
            history.push('/articles')
        }
    },[token])



    const loginBtn =() =>{
        APIser.loginUser({username,password})
        .then(res => setToken('mytoken',res.token))
    
    }
    return (
        <div className="App container"> 
           
            <h1>
                Please Login
            </h1>
            <br />
            <br />
            <div className="mb-3">
                <label htmlFor ="username" className="form-label" >Username</label>
                <input type="text" className="form-control" id="username" placeholder ="Please Enter your Username"
                value={username}  onChange ={e =>SetUsername(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor ="username" className="form-label" >password</label>
                <input type="password" className="form-control" id="username" placeholder ="Please Enter your Password" 
                value ={password} onChange ={e =>SetPassword(e.target.value)}
                />
            </div>
            <button onClick={loginBtn} className="btn btn-primary" >Login</button>
        </div>
    );
}

export default Login;