import React from 'react';

const footer = () => {

    return (
        <div className='footer'>

            <div className='footerBox1'>
                <h4 className='footerBox1__title'>Important info:</h4>
                <p className='footerBox1__text'>This site is a scool project an can by no means be used for hotel bookings. All content are made up.</p><br /><p className='footerBox1__text'>Neither will it provide accurat info about Bergen, Norway.</p>
            </div>

            <div className='footerBox1'>
                <h4 className='footerBox1__title'>Who made this?</h4>
                <p className='footerBox1__text'>This is the final exame of<br />front-end student<br />Ina Kristine Thoresen.</p><br /><p className='footerBox1__text'>All code & graphic design<br />&copy; Ina Kristine Thoresen.</p>
            </div>

            <div className='footerBox1'>
                <h4 className='footerBox1__title'>General Info:</h4>
                <p className='footerBox1__text'> Holidaze is written in JavaScript React, using React Hooks. The CSS is written in SASS</p><br /><h4 className='footerBox1__title'>Contact:</h4>
                <a className='footerBox1__link' href='https://www.linkedin.com/in/ina-kristine-thoresen/'>https://www.linkedin.com/in/ina-kristine-thoresen/</a>
            </div>

        </div>
    )
}

export default footer;