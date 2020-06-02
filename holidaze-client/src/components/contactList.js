import React from 'react';

const contactListItem = (props) => {
    const { clientName, email, message } = props;
    return (
        <div className='listings'>
            <h4 className='listings__text'><b>Client name: </b>{clientName}</h4>
            <p className='listings__text'><b>Email: </b>{email}</p>
            <p className='listings__text'><b>Message: </b>{message}</p>
            <div className='listings__line'></div>
        </div>
    )
}
export default contactListItem;
