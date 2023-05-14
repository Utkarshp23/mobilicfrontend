import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loggedSlice, login } from './slice';
// import { useDispatch } from 'react-redux';
import "./style.css";



function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    const user = {
      email: email,
      password: password,
    }
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:8080/logincheck', options)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        else {
          throw new Error("server Error")
        }
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          // setMsg("Invalid username/password")
        }
        else {
          const { token } = obj;
          localStorage.setItem('token', token);
          onLogin();
          console.log(obj);
          navigate('/home');
        }
      })
      .catch((error) => console.log(error))
  }


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

