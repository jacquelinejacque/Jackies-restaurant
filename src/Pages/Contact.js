import React, {useState} from 'react'
import PizzaLeft from '../Assets/pizzaLeft.jpg'
import '../Styles/Contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
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
  

    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!formData.message.trim()) {
      validationErrors.password = 'message is required';
    } 
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form successfully submitted');
    }
  };
  return (
    <div className='contact'>
        <div className='leftSide'style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>CONTACT US</h1>
            <form id='contact-form' method='post' onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input name='username' placeholder='Enter Full Name' type='text' onChange={handleChange} />

                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Email' type='email' onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}

                <label htmlFor='message'>Message</label>
                <textarea name='message' placeholder='Enter Message...' required onChange={handleChange} ></textarea>
                {errors.message && <span>{errors.message}</span>}
                <button type='submit'>Send Message</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact