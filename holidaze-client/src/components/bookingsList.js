import React from 'react';

const bookingsListItem = (props) => {
    const { establishment, clientName, email, checkin, checkout, adults, children, notes } = props;
    return (
        <div className='listings'>
            <h4 className='listings__title' >Hotel: {establishment}</h4>
            <p className='listings__text'><b>Client name: </b>{clientName}</p>
            <p className='listings__text'><b>Email: </b>{email}</p>
            <p className='listings__text'><b>Checkin date: </b>{checkin}</p>
            <p className='listings__text'><b>Checkout date: </b>{checkout}</p>
            <p className='listings__text'><b>Number of adults: </b>{adults}</p>
            <p className='listings__text'><b>Number of children: </b>{children}</p>
            <p className='listings__text'><b>Notes: </b>{notes}</p>
            <div className='listings__line'></div>
        </div>
    )
}
export default bookingsListItem;
