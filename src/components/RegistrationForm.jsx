import React, { useState } from 'react';
import Authentication from '../modules/Authentication';

const RegistrationForm = () => {
  const [signupForm, setSignupForm] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setSignupForm({
      ...signupForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Authentication.signUp(
      signupForm.email,
      signupForm.password,
      signupForm.conf_password
    );
    if (response.status === 'success') {
      setMessage(response.status);
    } else {
      setMessage(response.message);
    }
  };

  return (
    <div>
      <h3 data-cy="registration-header">Registration form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label data-cy="name-label">Your name:</label>
          <input onChange={handleChange} name="name" data-cy="name-input" />
        </div>
        <div>
          <label data-cy="email-label">Email:</label>
          <input onChange={handleChange} name="email" data-cy="email-input" />
        </div>
        <div>
          <label data-cy="password-label">Password:</label>
          <input
            onChange={handleChange}
            name="password"
            data-cy="password-input"
          />
        </div>
        <div>
          <label data-cy="conf-password-label">Confirm password:</label>
          <input
            onChange={handleChange}
            name="conf_password"
            data-cy="conf-password-input"
          />
        </div>
        <button data-cy="register-button">Register</button>
      </form>
      <div data-cy="message-box">{message}</div>
    </div>
  );
};

export default RegistrationForm;
