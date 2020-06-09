import React from 'react';
import Ad from '../components/ad';
import HotelCard from '../components/hotelcards';
import establishments from '../json/establishments.json';
import Searchfield from '../pages/Searchfield';


export default function Home() {

    let hotels = establishments.reverse();

    return (


        <div className='homecontainer'>

            <Searchfield className='searchfield' />
            <Ad />
            <div className='cardcontainer'>
                <h1 className='cardcontainer__title'>Our associated hotels:</h1>
                {hotels !== undefined ? (
                    hotels.map((value, index) => {
                        return (
                            <div className='card' key={value.id}>
                                <HotelCard
                                    id={value.id}
                                    className='card'
                                    imageUrl={value.imageUrl}
                                    title={value.establishmentName}
                                    text={value.description}
                                    key={index}
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


