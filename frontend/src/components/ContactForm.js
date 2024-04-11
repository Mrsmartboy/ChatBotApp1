import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [sucessMsg,setSucessMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Submit form data (e.g., send email)
    submitFormData(formData);
   
    // Reset form
    setFormData({ fullName: '', email: '', phoneNumber: '', description: '' });
    setErrors({});
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(data.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }
    if (!data.description.trim()) {
      errors.description = 'Description is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number validation regex
    return /^\d{10}$/.test(phoneNumber);
  };

  const submitFormData = async(data) => {
    // Perform form submission (e.g., send email)
    console.log('Submitting form data:', data);
    // You can perform API call here to send form data to backend server
    try {
      const response = await axios.post('http://localhost:8081/contacts', data);
      console.log('Form submitted successfully');
     setSucessMsg("Thank you for your response! Our team will reach You Shortly! Have a Nice day To You!!")
      // Handle success response if needed
      console.log(response)
    } catch (error) {
      console.error('Error submitting form:', error.message);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label className='contact-label' htmlFor='name'>Full Name:</label>
        <input type="text" id='name' name="fullName" value={formData.fullName} onChange={handleChange} className='contact-input' autoComplete='off'/>
        {errors.fullName && <div className="error">{errors.fullName}</div>}
      </div>
      <div className="form-group">
        <label className='contact-label' htmlFor='email'>Email:</label>
        <input type="email" name="email" id='email' value={formData.email} onChange={handleChange} className='contact-input'  autoComplete='off'/>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label className='contact-label' htmlFor='phone number'>Phone Number:</label>
        <input type="text" name="phoneNumber" id='phone number' value={formData.phoneNumber} onChange={handleChange} className='contact-input'  autoComplete='off'/>
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
      </div>
      <div className="form-group">
        <label className='contact-label' htmlFor='description'>Description:</label>
        <textarea name="description" id='description' value={formData.description} onChange={handleChange} className='contact-description' />
        {errors.description && <div className="error">{errors.description}</div>}
      </div>
      <button type="submit" className='contact-submit'>Submit</button>
      <p className='sucess-msg'>{sucessMsg}</p>
    </form>
  );
};

export default ContactForm;
