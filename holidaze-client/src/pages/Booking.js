import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='bookingForm'>

        <h1>Send an enquiry:</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='bookingContainer'>
                <h4>Please enter a hotel name:</h4>
                    <input
                        className='bookingContainer__inputfield--left'
                        type="text"
                        placeholder="Hotel name"
                        name="hotelName"
                        ref={register({ required: true })} />
                        {errors.hotelName && <p  className='bookingContainer__errorMessage'>A hotel name is required</p>}
                </div>

                <div className='bookingContainer'>
                <h4>Please enter your name:</h4>
                <input
                    className='bookingContainer__inputfield'
                    type="text"
                    placeholder="Full name"
                    name="fullName"
                    ref={register({ required: true, maxLength: 120 })} />
                    {errors.fullName && <p className='bookingContainer__errorMessage'>Your name is required</p>}
                    </div>

                    <div className='bookingContainer'>
                    <h4>Please enter your email:</h4>
                <input
                    className='bookingContainer__inputfield--left'
                    type="text"
                    placeholder="Email"
                    name="email" ref={register({ required: true, pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i })} />
                    {errors.email && <p className='bookingContainer__errorMessage'>Your email is required</p>}
                </div>

                    <div className='bookingContainer'>
                    <h4>Date of arrival:</h4>
                <input
                    className='bookingContainer__date--left'
                    type="date"
                    name="arrivalDate"
                    ref={register} />
                    {errors.arrivalDate && <p className='bookingContainer__errorMessage'>A date is required</p>}
                    </div>

                
                    <div className='bookingContainer'>
                    <h4>Date of departure:</h4>
                <input className='bookingContainer__date'
                    type="date"
                    name="departureDate"
                    ref={register} />
                    {errors.departureDate && <p className='bookingContainer__errorMessage'>A date is required</p>}
                    </div>

                    

                <input className='bookingContainer__submit'
                    type="submit" />

            </form>

        </div>
    );
}