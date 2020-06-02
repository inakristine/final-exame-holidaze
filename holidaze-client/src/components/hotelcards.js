import React from 'react';
import { Link } from 'react-router-dom';

const hotelcard = (props) => {
    const { imageUrl, altImg, title, text, id } = props;
    return (
        <div id={id}>
            <img src={imageUrl} alt={altImg} className='card__image'></img>
            <h3 className='card__title' >{title}</h3>
            <div className='card__line'></div>
            <p className='card__text'>{text}</p>
            <Link to={`/BookingID/${title}`} className="card__btn--left">Enquire</Link>
            <Link to={`/HotelSpecific/${title}`} className="card__btn--right">Wiew More</Link>
        </div>
    )
}

export default hotelcard;
