import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // For extracting token from URL
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './ResetPasswordPage.css'
const ResetPasswordPage = () => {
  const { id } = useParams(); // Extract token from URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8081/reset-password/:${id}`, {
        id: id,
        newPassword: password
      });

      if (response.status === 200) {
        setSuccessMessage('Password reset successful.');
        
      } else {
        setErrorMessage('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='reset-password-container'>
      <div className='reset-container'>
      <h2 className='reset-head'>Reset Password</h2>
      <form onSubmit={handleSubmit} className='reset-form-container'>
        <div className='password'>
          <label htmlFor='password' className='reset-label'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            id='password'
            className='reset-input'

          />
        </div>
        <div className='password'>
          <label className='reset-label' htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className='reset-input'
            id='confirm-password'
          />
        </div>
        {errorMessage && <div style={{ color: 'red', fontFamily:'cursive', fontSize:'18px', fontWeight:'bold' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'green', fontFamily:'cursive', fontSize:'18px', fontWeight:'bold' }}>{successMessage}</div>}
        <button type="submit" className='reset-button'>Reset Password</button>
        <p className='reset-login'>if you're reset password successful then clickon <span onClick={()=>navigate('/login')}>Login</span></p>
      </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
