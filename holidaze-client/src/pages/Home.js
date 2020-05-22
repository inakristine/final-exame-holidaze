import React, { useState } from 'react';
import Ad from '../components/ad';
import HotelCard from '../components/hotelcards';


export default function Home() {


    return (
       <div className='homecontainer'>
       <Ad />
       <div className='cardcontainer'>
       <HotelCard
       image='../../images/streets.jpg'
       altImg='Nothing to see here'
       title='Hotel name'
       text='A bunch of letters added toghether to fill a void.'/>
       <HotelCard
       image='../../images/streets.jpg'
       altImg='Nothing to see here'
       title='Hotel name'
       text='A bunch of letters added toghether to fill a void.'/>
       <HotelCard
       image='../../images/streets.jpg'
       altImg='Nothing to see here'
       title='Hotel name'
       text='A bunch of letters added toghether to fill a void.'/>
       <HotelCard
       image='../../images/streets.jpg'
       altImg='Nothing to see here'
       title='Hotel name'
       text='A bunch of letters added toghether to fill a void.'/>
       </div>
       </div>
    )
}


