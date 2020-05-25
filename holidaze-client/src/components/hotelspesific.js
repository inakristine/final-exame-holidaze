import React from 'react';

const hotelSpecific = (props) => {
    const { image, altImg, title, text, enquire } = props;
    console.log(props);

    return (
        <div className='hotelSpecific'>
            <img src={image} alt={altImg} className='hotelSpecific__image'></img>
            <h1 className='hotelSpecific__title' >{title}</h1>
            <div className='hotelSpecific__line'></div>
            <p className='hotelSpecific__text'>{text}</p>
            <link className='hotelSpecific__btn' to={enquire}>Enquire</link>
        </div>
    )
}

export default hotelSpecific;