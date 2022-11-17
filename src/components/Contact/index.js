import React from 'react';

function Contact() {
  return (
    <section className='container-fluid'>
      <div className='m-5'>
        <h1>contact me</h1>
        <form id='contact-form'>
        <div>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type='text' name='name' className='form-control'/>
        </div>
        <div>
          <label htmlFor='email' className='form-label'>Email address:</label>
          <input type='email' name='email' className='form-control'/>
        </div>
        <div>
          <label htmlFor='message' className='form-label'>Message:</label>
          <textarea name='message' rows='5' className='form-control'/>
        </div>

        <button className='btn' type='submit'>Submit</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;