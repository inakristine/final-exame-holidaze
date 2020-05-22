import React from 'react';

const hotelcard = (props) => {
    const { image, altImg, title, text, enquire, viewMore } = props;
    return (
        <div className='card'>
            <img src={image} alt={altImg} className='card__image'></img>
            <h3 className='card__title' >{title}</h3>
            <div className='card__line'></div>
            <p className='card__text'>{text}</p>
            <button className='card__btn--left' to={enquire}>Enquire</button>
            <button className='card__btn--right' to={viewMore}>View more</button>
        </div>
    )
}

export default hotelcard;