import React, { useState } from 'react';
import axios from 'axios'
import './LoginForm.css';
import {useNavigate} from 'react-router-dom'
// import Cookies from 'js-cookie';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError,setShowSubmitError]=useState(false)
  const [errMsg,setErrMsg]= useState('')

  const navigate = useNavigate()


  const onSubmitSuccess=(jwtToken)=>{
    localStorage.setItem('token', jwtToken);   
    navigate('/', {replace:true})
   
  }

  const onSubmitFailure=(errorMsg)=>{
      setShowSubmitError(!showSubmitError)
      setErrMsg(errorMsg)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, for simplicity, let's just log the input values
    const values = {email,password};
    axios.post('http://localhost:8081/login',values)
    .then(res=>{
      if (res.data.Login===true){
    

       onSubmitSuccess(res.data.token)
      }else{
        console.log(res.data.err_msg)
        onSubmitFailure(res.data.err_msg)
      }
    })
    .catch(err=>console.log(err))
   
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='login-head'>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          />
        </div>
        <button type="submit">Login</button>
        <p>{errMsg}</p>
        <div className='login-register-forgot'>
          <p className='link-register' onClick={()=>navigate('/signup')}>Register</p>
          <p className='link-forgot-password' onClick={()=>navigate('/forgot-password')}>Forgot Password</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
