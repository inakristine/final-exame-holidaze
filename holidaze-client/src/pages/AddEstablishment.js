import React, { useState } from 'react';
//import { useForm } from 'react-hook-form';


export default function AddEstablishment () {

    return(

    <form className='[ listings ][ AddEstablishment ]'>

    <h4>Establishment name:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='establishmentName'
    name='establishmentName'
    />

    
    <h4>Establishment email:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='establishmentEmail'
    name='establishmentEmail'
    />

    
    <h4>Enter image url:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='imageUrl'
    name='imageUrl'
    />

    
    <h4>Price pr night:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='price'
    name='price'
    />

    
    <h4>Maximum number of guests:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='maxGuests'
    name='maxGuests'
    />

    
    <h4>Latitude:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='googleLat'
    name='googleLat'
    />

    
    <h4>Longetude:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='googleLong'
    name='googleLong'
    />

    
    <h4>Description:</h4>
    <input
    className='AddEstablishment__input'
    type='textaera'
    placeholder='description'
    name='description'
    />
    
    <div className='AddEstablishment__check' >
    <input className='AddEstablishment__inputbox' id="a" type="checkbox" tabindex="1"/>
    <label className='AddEstablishment__inputlable' for="a"><h4>Self catering:</h4></label>
    </div>

    <h4>ID:</h4>
    <input
    className='AddEstablishment__input'
    type='text'
    placeholder='id'
    name='id'
    />

    </form>
    )
}