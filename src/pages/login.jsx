// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { loginCall } from './apiCalls';
import { AuthContext } from '../Context/AuthContext';
import { CircularProgress } from '@material-ui/core';

const Login = () => {
  const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const email = useRef();
  const password = useRef();
  const [rememberMe, setRememberMe] = useState(false);
  const { isFetching, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // const handleEmailChange = (event) => {
  //   event.preventDefault();
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   event.preventDefault();
  //   setPassword(event.target.value);
  // };

  const handleRememberMeChange = (event) => {
    event.preventDefault();
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginCall({email: email.current.value , password: password.current.value }, dispatch)
    navigate('/home');
  };
  
  // eslint-disable-next-line no-unused-vars
  const handleSignupClick = () => {
    navigate('/signup');
  };

  // eslint-disable-next-line no-unused-vars
  const handleForgotPasswordClick = () => {
    navigate('/forgotpassword');
  };
  
  return (
    <div id="root">
      <h1>Welcome to Otter Beat Music</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" required ref={password} minLength='8' />
        </label>
        <label>
          Email:
          <input type="text"required ref={email}  />
        </label>
        <label>
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
          Remember me
        </label>
        <button type="submit">{isFetching ? <CircularProgress /> : "Login" }</button>
        <div>
          <a href="signup" className="f6 link dim navy db">Sign Up</a>
          <a href="Forgotpassword" className="f6 link dim navy db">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
