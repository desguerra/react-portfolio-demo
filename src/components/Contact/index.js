import React from 'react';

function Contact() {
  return (
    <section className='container-fluid'>
      <div className='mx-5 py-2'>
        <h2>contact me</h2>
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