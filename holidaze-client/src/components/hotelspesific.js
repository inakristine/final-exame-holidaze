import React from 'react';
import { Link } from 'react-router-dom';

const hotelSpecific = (props) => {
    const { image, altImg, title, text, enquire, email, price, guests, catering, map, link } = props;
    console.log(props);

    return (
        <div className='hotelSpecific'>

            <div className='imageContainer'>
            <img src={image} alt={altImg} className='imageContainer__image'></img>
            <h1 className='imageContainer__title' >{title}</h1>
            <div className='imageContainer__line'></div>
            </div>
            
            <div className='infoContainer'>
            <div className='infoLeft'>
            <p className='hotelSpecific__text'><b>Description:</b><br></br> {text}</p>
            <p className='hotelSpecific__email'><b>E-mail:</b> {email}</p>
            <p className='hotelSpecific__price'><b>Price:</b> {price}</p>
            <p className='hotelSpecific__guests'><b>Guest capacity:</b> {guests}</p>
            <p className='hotelSpecific__catering'><b>Self catering:</b> {catering}</p>
            <Link to={`/Booking/${title}`} className="card__btn--right">Enquire</Link>
            <button>{link}</button>
            </div>

            <div className='infoRight'>
            <p><b>Location:</b></p>
            {map}
            
            </div>

            </div>

        </div>
    )
}

export default hotelSpecific;
