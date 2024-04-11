import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import './RegistrationForm.css';

function RegistrationForm() {
  // Define state variables to store form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucessMsg,setSucessMsg] = useState('')
  const [errMsg,setErrMsg] = useState('')
  const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = (e) => { 
    e.preventDefault();
    // Perform validation and submission logic here
   const values=  { firstName, lastName, email, password }
     axios.post('http://localhost:8081/signup',values)
     .then(res=>{
    
     setSucessMsg(`Registration successful Then click on LoginForm And enter your credentials`)
     setEmail('')
     setFirstName('')
     setLastName('')
     setPassword('')
     setErrMsg('')
     
     })
     .catch(err=>{
       const {response}=err 
       const {data} = response
       const {message} = data 
       setErrMsg(message)

     })
  };

  return (
    <div className="registration-container">
      <div className='register-container'>
      <h2 className='register-header'>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='input-form'
            autoComplete='off'
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className='input-form'
            autoComplete='off'


          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='input-form'
            autoComplete='off'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='input-form'
          />
        </div>
        <button type="submit" className='button-register'>Register</button>
        <p className='success-msg'>{sucessMsg}</p>
        <p className='err-msg'>{errMsg}</p>
      </form>
      <p className='login-account'>If you have an account then <span onClick={()=>navigate('/login')} className='span-signup'>Login</span></p>
    </div>
    </div>
  );
}

export default RegistrationForm;
