import React from 'react';
import { Link } from 'react-router-dom';

const hotelcard = (props) => {
    const { imageUrl, altImg, title, text, enquire, viewMore, id } = props;
    return (
        <div className='card'>
            <img src={imageUrl} alt={altImg} className='card__image'></img>
            <h3 className='card__title' >{title}</h3>
            <div className='card__line'></div>
            <p className='card__text'>{text}</p>
            <button className='card__btn--left' to={enquire}>Enquire</button>
            <Link to={`/HotelSpecific/${id}`} className="card__btn--right">Wiew More</Link>
        </div>
    )
}

export default hotelcard;