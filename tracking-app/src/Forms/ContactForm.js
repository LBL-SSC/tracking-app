import React from 'react';

const ContactForm = () => {

    return(
        <div className='ContactForm'>
            <h1>Contact Me</h1>

            <div>
                <form>
                    
                    <label>
                        <input 
                            type='text'
                            name='name'
                            placeholder='First Name'
                        />
                    </label>

                    <br></br>

                    <label>
                        <input 
                            type='text'
                            name='name'
                            placeholder='Last Name'
                        />
                    </label>

                    <br></br>

                    <label>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                    </label>

                    <br></br>

                    <label>
                        <textarea 
                            name='subject'
                            placeholder='Thoughts'></textarea>
                        <input 
                            type='submit'
                            value='Submit'
                        />
                    </label>

                </form>
            </div>
        </div>
    );
}

export default ContactForm;