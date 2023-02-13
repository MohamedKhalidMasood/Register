import React, { useState } from 'react';

import './index.scss';

function Login() {
    const [state, setState] = useState(
        {
            username:'',
            password:'',
        }
    )

    const handlechange =(event, id) => {
        console.log('event: ', event.target.value, id);
        setState(
            {
               ...state,
               [id]: event.target.value, 
            }
        )

    }
    const handleSubmit =() => {
        const{ username, password}= state;
        console.log('username: ', username);
        console.log('password: ', password);
    }

    const { username, password } = state;
    
    return (
       <div className="login-form">
        <input
        type="text"
        value= {username}
        placeholder= "username"
        onChange={(event) => handlechange(event, 'username')}
        />
        <input
        type="password"
        value={password}
        placeholder= "password"
        onChange={(event) => handlechange(event, 'password')}
        />
        <button type="submit" onClick={() => handleSubmit() }>login</button>

       </div>
    );
};

export default Login;