import React from 'react';

const hotelSpecific = (props) => {
    const { image, altImg, title, text, enquire } = props;
    console.log(props);

    return (
        <div className='hotelSpecific'>

            <div className='imageContainer'>
            <img src={image} alt={altImg} className='imageContainer__image'></img>
            <h1 className='imageContainer__title' >{title}</h1>
            <div className='imageContainer__line'></div>
            </div>
            <div className='infoContainer'>
            
            <p className='hotelSpecific__text'>{text}</p>
            </div>
            
        </div>
    )
}

export default hotelSpecific;

//<link className='hotelSpecific__btn' to={enquire}>Enquire</link>