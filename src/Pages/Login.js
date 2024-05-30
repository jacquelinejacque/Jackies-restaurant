import React, { useState } from 'react';
import '../Styles/Login.css';

function Login() {
  const [action, setAction] = useState('Sign Up');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    } else if (!formData.password.match(lowerCase)) {
      validationErrors.password = 'Password should contain at least 1 lowercase letter!';
    } else if (!formData.password.match(upperCase)) {
      validationErrors.password = 'Password should contain at least 1 uppercase letter!';
    } else if (!formData.password.match(numbers)) {
      validationErrors.password = 'Password should contain at least 1 number!';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form successfully submitted');
    }
  };

  return (
    <div className='Sign-up'>
      <form onSubmit={handleSubmit}>
        <h1>{action}</h1>
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div>
            <label htmlFor='name'>Name</label>
            <input name='username' placeholder='Enter Name' type='name' onChange={handleChange} />
          </div>
        )}
        {errors.username && <span className='errors'>{errors.username}</span>}
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter Email' type='email' onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input name='password' placeholder='Enter Password' type='password' onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>

        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <div>
            <p>
              Lost Password? <a href='/'>Click Here</a>{' '}
            </p>
          </div>
        )}

        <div className='btn'>
          <button type='submit' className={action === 'Login' ? 'submit-gray' : 'submit'} onClick={() => setAction('Sign Up')}>
            Sign Up
          </button>
          <button type='submit' className={action === 'Sign Up' ? 'submit-gray' : 'submit'} onClick={() => setAction('Login')}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
