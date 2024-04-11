import React, { useState } from 'react';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import Cookies library

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  
  const onSubmitSuccess = (jwtToken) => {
    // Set cookie with token and expiration time (e.g., 1 hour from now)
    const expirationTime = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hour in milliseconds
    Cookies.set('token', jwtToken, { expires: expirationTime });
    navigate('/', { replace: true });
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(!showSubmitError);
    setErrMsg(errorMsg);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { email, password };
    axios
      .post('http://localhost:8081/login', values)
      .then((res) => {
        if (res.data.Login === true) {
          onSubmitSuccess(res.data.token);
        } else {
          console.log(res.data.err_msg);
          onSubmitFailure(res.data.err_msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-head">Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className="image-password-container">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
              autoComplete="off"
              className="input-login"
            />
            <p className='user-icon'>
            <PermIdentityOutlinedIcon/>
            </p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="image-password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              autoComplete="off"
              className="input-login"
            />
             <p onClick={togglePasswordVisibility} className='toggle-button'>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </p>
          </div>
        </div>
        <p className="link-forgot-password" onClick={() => navigate('/forgot-password')}>
          Forgot Password
        </p>

        <button type="submit" className="login-button">
          Login
        </button>
        <p className="login-error">{errMsg}</p>
        <div className="login-register-forgot">
          <p className="link-register">
            Don't have an account <span className='span-login' onClick={() => navigate('/signup')}>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
