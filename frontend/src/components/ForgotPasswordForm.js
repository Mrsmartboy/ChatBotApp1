import React, { useState } from 'react';
import axios from 'axios';

import './ForgotPasswordForm.css'

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error)
    try {
      const response = await axios.post('http://localhost:8081/forgot-password', { email });
      setMessage(response.data);
      console.log(response.data)
    } catch (error) {
      setError('Something went wrong. Please try again later.');

    }
  };

  return (
    <div className='forgot-password-main-container'>
    <div className="forgot-password-form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='forgot-email'
          />
        </div>
        <button type="submit">Reset Password</button>
        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default ForgotPasswordForm;
