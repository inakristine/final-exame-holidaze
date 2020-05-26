import React from 'react';
import { useForm } from 'react-hook-form';
import contact from 'http://192.168.64.2/holidaze/contact-success.php'
import axios from 'axios';

export default function App() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post(contact, data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    console.log(errors);

    return (
        <div className='contactForm'>
        <h1>Send us a message:</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='inputContainer'>
                    <h4>Please enter your name:</h4>
                    <input className='inputContainer__inputfield--left'
                        type="text"
                        placeholder="Full name"
                        name="fullName"
                        ref={register({ required: true, maxLength: 180 })} />
                    {errors.fullName && <p  className='inputContainer__errorMessage'>Your name is required</p>}
                </div>

                <div className='inputContainer'>
                    <h4>Please enter your email:</h4>
                    <input className='inputContainer__inputfield'
                        type="email"
                        placeholder="Email"
                        name="email"
                        ref={register({ required: true, pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i })} />
                    {errors.email && <p className='inputContainer__errorMessage'>Your email is required</p>}
                </div>
                <div className='inputContainer'>
                <h4>Please enter your message:</h4>
                    <textarea className='inputContainer__messagefield'
                        name="message"
                        ref={register({ required: true, maxLength: 800 })} />
                    {errors.message && <p className='inputContainer__errorMessage'>You can not submit an empty message</p>}
                </div>

                <input className='inputContainer__submit' type="submit" />
            </form>
        </div>
    );
}