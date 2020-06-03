import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function AddEstablishment() {

    const { register, handleSubmit, errors } = useForm();
    console.log(errors);

    return (

        <form
            className='[ listings ][ AddEstablishment ]'
            action='http://192.168.64.2/holidaze/add-establishments-success.php'
            method='post'
            onFocus={handleSubmit()}>

            <h4>Establishment name:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='establishmentName'
                name='establishmentName'
                ref={register({ required: true })} />
            {errors.establishmentName && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}


            <h4>Establishment email:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='establishmentEmail'
                name='establishmentEmail'
                ref={register({ required: true, pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i })} />
            {errors.establishmentEmail && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <h4>Enter image url:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='imageUrl'
                name='imageUrl'
                ref={register({ required: true })} />
            {errors.imageUrl && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <h4>Price pr night:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='price'
                name='price'
                ref={register({ required: true })} />
            {errors.price && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <h4>Maximum number of guests:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='maxGuests'
                name='maxGuests'
                ref={register({ required: true })} />
            {errors.maxGuests && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <h4>Latitude:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='googleLat'
                name='googleLat'
                ref={register({ required: true })} />
            {errors.googleLat && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <h4>Longetude:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='googleLong'
                name='googleLong'
                ref={register({ required: true })} />
            {errors.googleLong && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}


            <h4>Description:</h4>
            <input
                className='AddEstablishment__input'
                type='textaera'
                placeholder='description'
                name='description'
                ref={register({ required: true })} />
            {errors.description && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}


            <div className='AddEstablishment__check' >
                <input className='AddEstablishment__inputbox' id="a" type="checkbox" />
                <label className='AddEstablishment__inputlable' htmlFor="a"><h4>Self catering:</h4></label>
            </div>

            <h4>ID:</h4>
            <input
                className='AddEstablishment__input'
                type='text'
                placeholder='id'
                name='id'
                ref={register({ required: true })} />
            {errors.id && <p className='AddEstablishment__errorMessage'>This input field can not be empty</p>}



            <input className='AddEstablishment__submit'
                type="submit"
            />

        </form>
    )
}