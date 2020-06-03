import React from 'react';
import { Link } from 'react-router-dom';

const hotelSpecific = (props) => {
    const { image, altImg, title, text, email, price, guests, catering, map } = props;
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
                    <p className='infoLeft__text'><b>Description:</b><br /> {text}</p><div className="br" />
                    <p className='infoLeft_text'><b>E-mail:</b> {email}</p><div className="br" />
                    <p className='infoLeft__text'><b>Price:</b> {price} $</p><div className="br" />
                    <p className='infoLeft__text'><b>Guest capacity:</b> {guests}</p><div className="br" />
                    <p className='infoLeft__text'><b>Self catering:</b> {catering}</p>
                    <Link to={`/BookingID/${title}`} className="infoLeft__button">Enquire</Link>

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
