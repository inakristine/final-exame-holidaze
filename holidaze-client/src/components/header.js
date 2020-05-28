import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {

    return (
        <div className='header'>

            <div className='lines'>
                <div className='lines__pink'> </div>
                <div className='lines__navy'> </div>
                <div className='lines__lime'> </div>
                <div className='lines__navy'> </div>
                <div className='lines__pink'> </div>
            </div>

        <Link to='/'>
        <div className="logo">
                <p className="logo__text">Holidaze</p>
            </div>
        </Link>
            <div className='lines'>
                <div className='lines__pink'> </div>
                <div className='lines__navy'> </div>
                <div className='lines__lime'> </div>
                <div className='lines__navy'> </div>
                <div className='lines__pink'> </div>
            </div>

        </div>
    )
}

export default header;