import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Booking() {

    let [arrival, setArrival] = useState('');
    let [departure, setDeparture] = useState('');
    let [adults, setAdults] = useState('');
    let [children, setChildren] = useState('');

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'checkin': setArrival(value);
            break;
            case 'checkout': setDeparture(value);
            break;
            case 'adults': setAdults(value);
            break;
            case 'children': setChildren(value);
            break
        }
        
    }

    let buttonConditions = ((arrival !=='') && (departure !=='') && (adults !=='') && (children !==''));
    console.log(buttonConditions);

    const { register, handleSubmit, errors } = useForm();
    console.log(errors);

    

    return (
        <div className='bookingForm'>

            <h1>Send an enquiry:</h1>

             <form className='[ formGrid ]' action='http://192.168.64.2/holidaze/enquiry-success.php' method='post' onFocus={handleSubmit()} >



                <div className='[ bookingContainer ][ formGrid__Number2 ]'>
                    <h4>Please enter your name:</h4>
                    <input
                        className='bookingContainer__inputfield--left'
                        type="text"
                        placeholder="Full name"
                        name="clientName"
                        ref={register({ required: true, maxLength: 120 })} />
                    {errors.clientName && <p className='bookingContainer__errorMessage'>Your name is required</p>}
                </div>

                <div className='[ bookingContainer ][ formGrid__Number3 ]'>
                    <h4>Please enter your email:</h4>
                    <input
                        className='bookingContainer__inputfield--left'
                        type="text"
                        placeholder="Email"
                        name="email" ref={register({ required: true, pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i })} />
                    {errors.email && <p className='bookingContainer__errorMessage'>Your email is required</p>}
                </div>

                <div className='[ bookingContainer ][ formGrid__Number1 ]'>
                <h4>Please enter a hotel name:</h4>
                <input
                    className='bookingContainer__inputfield'
                    type="text"
                    placeholder="Hotel name"
                    name="establishment"
                    ref={register({ required: true })} />
                {errors.establishment && <p className='bookingContainer__errorMessage'>A hotel name is required</p>}
            </div>

                <div className='[ bookingContainer ][ formGrid__Number4 ]'>
                    <h4>Date of arrival:</h4>
                    <input
                        className='bookingContainer__date--left'
                        onChange={handleChange}
                        type="date"
                        name="checkin"
                        placeholder="mm.dd.yyyy"
                         />
                    <p className={( (arrival ==='') ? 'bookingContainer__errorMessage' : 'bookingContainer__errorMessage--hide')}>A date is required</p>
                </div>

                <div className='[ bookingContainer ][ formGrid__Number5 ]'>
                    <h4>Date of departure:</h4>
                    <input className='bookingContainer__date'
                    onChange={handleChange}
                        type="date"
                        name="checkout"
                        type="date"
                        placeholder="mm.dd.yyyy"
                        />
                        <p className={( (departure ==='') ? 'bookingContainer__errorMessage' : 'bookingContainer__errorMessage--hide')}>A date is required</p>
                </div>

                <input className='[ bookingContainer__guests ] [ formGrid__Number6 ]'
                    onChange={handleChange}
                    type="text"
                    name="adults"
                    placeholder='0' />
                    
                <div className='[ bookingContainer__Number7 ]'>
                    <h4 className='bookingContainer__title'>Number of adult guests:</h4>
                    <p className={((adults ==='') ? 'bookingContainer__errorMessage' : 'bookingContainer__errorMessage--hide')}>At least one adult must be booked in</p>
        
                </div>

                <input className='[ bookingContainer__guests ][ formGrid__Number8 ]'
                    onChange={handleChange}
                    placeholder='0'
                    type="text"
                    name="children"
                    />
                
                <div className='[ bookingContainer__Number9 ]'>
                    <h4 className='bookingContainer__title'>Number of cildren (3-16 years):</h4>
                    <p className={((children ==='') ? 'bookingContainer__errorMessage' : 'bookingContainer__errorMessage--hide')}>Type zero if no children</p>
                    
                </div>

                <div className='[ bookingContainer ][ formGrid__Number10 ]'>
                    <h4>Notes:</h4>
                    <textarea
                        className='bookingContainer__note'
                        placeholder='Please let us know if you are making bookings for anyone with special needs. We take greate pride in our no-descrimination-policy.'
                        type="textaerea"
                        name="notes"
                    />
                </div>

                <input className='[ bookingContainer__submit ][ formGrid__Number11 ]__submit'
                    type="submit" disabled={(buttonConditions !== true)}
                    />

            </form>

        </div>
    );
}
