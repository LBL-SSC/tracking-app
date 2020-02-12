import React from 'react';

const ContactForm = () => {

    return(
        <div className='ContactForm'>
            <h1>Contact Me</h1>

            <div>
                <form>
                    
                    <label>
                        First Name:
                        <input 
                            type='text'
                            name='name'
                            placeholder='First Name'
                        />
                    </label>

                    <label>
                        Last Name:
                        <input 
                            type='text'
                            name='name'
                            placeholder='Last Name'
                        />
                    </label>

                    <label>
                        Email:
                        <input 
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                    </label>

                    <label>
                        Subject:
                        <textarea 
                            name='subject'
                            placeholder='Thoughts. Questions. Feedback.'></textarea>
                        <input 
                            type='submit'
                            value='Submit'
                        />
                    </label>

                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;