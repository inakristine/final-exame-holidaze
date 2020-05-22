import React from 'react';

const footer = (props) => {
    const { title, text } = props;

    return (
        <div className='footer'>
            <h5 className='enquiry__title'>{title}</h5>
            <p className='enquiry__hotelname'>{text}</p>
        </div>
    )
}

export default footer;