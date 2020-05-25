import React, { useState } from 'react';
import establishments from '../json/establishments.json';
import HotelSpecific from '../components/hotelspesific';



export default function SpecificHotel(props) {

    console.log('boo', props.match.params.id -1)

    let id = props.match.params.id;

    console.log(id);

    let [hotel, sethotel] = useState(establishments[id -1]);
    console.log(" dette skulle vært riktig hotell", hotel)
    

    return (
        
        (hotel !== undefined) ?
        <div className='hotelspecificContainer'>
        <HotelSpecific
        image={hotel.imageUrl}
        altImg={hotel.description}
        title={hotel.establishmentName}
        text={hotel.description}
         />
        </div>
        :
        <div className='hotelspecificContainer'>
        <h1>no data</h1>
        </div>
    )
}

/* 
"establishmentName": "Sunsssset Beach",
"establishmentEmail": "info@sunsetbeach.com",
"imageUrl": "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
"price": "85",
"maxGuests": "18",
"googleLat": "60.393388",
"googleLong": "5.228720",
"description": "Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below.",
"selfCatering": "true",
"id": "1" */


// <img src={image} alt={altImg} className='hotelSpecific__image'></img>
//             <h1 className='hotelSpecific__title' >{title}</h1>
//             <div className='hotelSpecific__line'></div>
//             <p className='hotelSpecific__text'>{text}</p>
//             <link className='hotelSpecific__btn' to={enquire}>Enquire</link>