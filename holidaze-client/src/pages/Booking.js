import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Booking() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='bookingForm'>

            <h1>Send an enquiry:</h1>

            <form className='formGrid' onSubmit={handleSubmit(onSubmit)}>

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

                <div className='[ bookingContainer ][ formGrid__Number4 ]'>
                    <h4>Date of arrival:</h4>
                    <input
                        className='bookingContainer__date--left'
                        type="date"
                        name="checkin"
                        placeholder="mm.dd.yyyy"
                        ref={register} />
                    {errors.checkin && <p className='bookingContainer__errorMessage'>A date is required</p>}
                </div>

                <div className='[ bookingContainer ][ formGrid__Number5 ]'>
                    <h4>Date of departure:</h4>
                    <input className='bookingContainer__date'
                        type="date"
                        name="checkout"
                        type="date"
                        placeholder="mm.dd.yyyy"
                        ref={register} />
                    {errors.checkout && <p className='bookingContainer__errorMessage'>A date is required</p>}
                </div>

                <input className='[ bookingContainer__guests ] [ formGrid__Number6 ]'
                    type="number"
                    name="adults"
                    placeholder='0'
                    ref={register} />
                {errors.adults && <p className='bookingContainer__errorMessage'>A date is required</p>}
                <div className='[ bookingContainer__Number7 ]'>
                    <h4 className='bookingContainer__title'>Number of adult guests:</h4>
                </div>

                <input className='[ bookingContainer__guests ][ formGrid__Number8 ]'
                    placeholder='0'
                    type="number"
                    name="children"
                    ref={register} />
                {errors.children && <p className='bookingContainer__errorMessage'>A date is required</p>}
                <div className='[ bookingContainer__Number9 ]'>
                    <h4 className='bookingContainer__title'>Number of cildren (3-16 years):</h4>
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
                    type="submit" />

            </form>

        </div>
    );
}

/* $newEnquiry->establishment = $_POST["establishment"];
$newEnquiry->clientName = $_POST["clientName"];
$newEnquiry->email = $_POST["email"];
$newEnquiry->checkin = $_POST["checkin"];
$newEnquiry->checkout = $_POST["checkout"];
$newEnquiry->adults = $_POST["adults"];
$newEnquiry->children = $_POST["children"];
$newEnquiry->notes = $_POST["notes"]; */