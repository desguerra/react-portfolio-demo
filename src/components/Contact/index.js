import React from 'react';

function Contact() {
  return (
    <section className='container-fluid'>
      <div className='mx-5 py-2'>
        <h2>contact me</h2>

        <div className='p-4'>
          <form id='contact-form'>
          <div>
            <label htmlFor='name' className='form-label'>name:</label>
            <input type='text' name='name' className='form-control'/>
          </div>
          <div>
            <label htmlFor='email' className='form-label'>email address:</label>
            <input type='email' name='email' className='form-control'/>
          </div>
          <div>
            <label htmlFor='message' className='form-label'>message:</label>
            <textarea name='message' rows='5' className='form-control'/>
          </div>

          <button className='btn-sub' type='submit'>submit</button>

          </form>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;