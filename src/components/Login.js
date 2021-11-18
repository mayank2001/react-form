import React, { useEffect, useState } from 'react';
import { login } from "../features/userSlice"
import { useDispatch } from 'react-redux'
import "./Login.css";



const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
          login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,  
        })
        );
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login..</h1>
                <input 
                type="name" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="Email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="Password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="login" className="login__btn">Login</button>
            </form>
        </div>
    )
}

export default Login
