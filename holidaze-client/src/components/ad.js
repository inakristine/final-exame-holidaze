import React from 'react';

const ad = () => {

    return (
        <div className='ad'>
            <div className='adcard' id='ad1'>
                <div className='adcard__titlebox'>
                    <h3 className='adcard__title'>Charming streets</h3>
                </div>
            </div>

            <div className='adcard' id='ad2'>
                <div className='adcard__titlebox'>
                    <h3 className='adcard__title'>Habour on Unesco list</h3>
                </div>
            </div>

            <div className='adbomb'>
                <h4 className='adbomb__title'>
                    Guided<br />
        city tours<br />
        included<br />
        all June!</h4>
            </div>

            <div className='adframe'>
                <h3 className='adframe__title'>
                    Call today and get:</h3>
                <p className='adframe__text'>• 15% off all inclusive<br />
        • Free public transport within city limits<br />
        • 20% discount on all guided tours</p>
            </div>
        </div>
    )
}

export default ad;