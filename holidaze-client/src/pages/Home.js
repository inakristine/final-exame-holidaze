import React, { useState } from 'react';
import Ad from '../components/ad';
import HotelCard from '../components/hotelcards';
import establishments from '../json/establishments.json';


export default function Home() {

    let [hotels, sethotels] = useState(establishments);

    return (
        

        <div className='homecontainer'>
            <Ad />
            <div className='cardcontainer'>
            <h1 className='cardcontainer__title'>Some of our colaborators:</h1>
                {hotels !== undefined ? (
                    hotels.map((value, index) => {
                        console.log(value.id)
                        return (
                            <div>
                                <HotelCard
                                    id={value.id}
                                    className='card'
                                    imageUrl={value.imageUrl}
                                    title={value.establishmentName}
                                    text={value.description}
                                />
                            </div>
                        );
                    })
                ) : (
                        <div>Waiting for hotels to apair</div>
                    )}
            </div>
        </div>
    )




}


