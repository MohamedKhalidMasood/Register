import React, { useState } from 'react';
import './index.scss';

function Login() {
  
    const [state, setState] = useState(
      {
          name:'',
          email:'',
          password:'',
          confirmPassword:'',

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
  
    const handleSubmit = () => {
      const{name, email, password, confirmPassword}= state;
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('confirmPassword: ', confirmPassword);
    }
  
    return (
      <div className="login-form">
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => handlechange(event, 'name')}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => handlechange(event, 'email')}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => handlechange(event, 'password')}
        />
        <input
          type="password"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(event) => handlechange(event, 'confirmPassword')}
        />
        <button type="submit" onClick={() => handleSubmit() }>Signup</button>

       </div>
    );
};

export default Login;