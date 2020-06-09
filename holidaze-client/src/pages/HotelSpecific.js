import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import establishments from '../json/establishments.json';
import HotelSpecific from '../components/hotelspesific';




export default function SpecificHotel(props) {

    const setTop = () => {
        window.scrollTo({ top: 100, left: 100 });
    }
    window.onload = setTop();


    let id = props.match.params.id;
    let obj = establishments.find(obj => obj.establishmentName === id);
    let hotel = obj;
    let longetude = parseFloat(obj.googleLong);
    let latitude = parseFloat(obj.googleLat);

    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longetude,
        height: '300px',
        width: '389px',
        zoom: 12,

    })

    return (
        (obj !== undefined) ?
            <div>
                <div className='pushbox'></div>
                <div className='hotelspecificContainer'>
                    <HotelSpecific
                        name={hotel.establishmentName}
                        image={hotel.imageUrl}
                        altImg={hotel.description}
                        title={hotel.establishmentName}
                        text={hotel.description}
                        email={hotel.establishmentEmail}
                        price={hotel.price}
                        guests={hotel.maxGuests}
                        catering={hotel.selfCatering}

                        map={<ReactMapGL className='map' {...viewport} mapboxApiAccessToken='pk.eyJ1IjoiaW5ha3Jpc3RpbmUiLCJhIjoiY2thbncwc3BiMXYyZTMxbG0zenQ2MWlnYSJ9.z1Kiyt5elDHNod9Ka2_neQ'
                            mapStyle='mapbox://styles/inakristine/ckanxddus67761ilku2tw8egn'
                            onViewportChange={viewport => {
                                setViewport(viewport);
                            }}
                        >
                            <Marker
                                className='marker'
                                latitude={latitude}
                                longitude={longetude}
                            >
                                <div className='marker__dot'></div>
                                <h4 className='marker__name'>{hotel.establishmentName}</h4>
                            </Marker>
                        </ReactMapGL>}
                    />
                </div>
            </div>
            :
            <div><div className='pushbox'></div>
                <div className='hotelspecificContainer'>
                    <h1>no data</h1>
                </div>
            </div>
    )
}