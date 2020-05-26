import React, { useState } from 'react';
import ReactMapGL, {  Marker } from "react-map-gl";
import establishments from '../json/establishments.json';
import HotelSpecific from '../components/hotelspesific';


export default function SpecificHotel(props) {
    
    let id = props.match.params.id;
    console.log("ID=", id);
    let obj = establishments.find(obj => obj.establishmentName === id);

    let [hotel, sethotel] = useState(obj);

    let longetude = parseFloat(obj.googleLong);
    let latitude = parseFloat(obj.googleLat);

    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longetude,
        height: "300px",
        width: "389px",
        zoom:12,
        
    }) 

    return (
        (obj !== undefined) ?
            <div className='hotelspecificContainer'>
                <HotelSpecific
                    name={hotel.establishmentName}
                    image={hotel.imageUrl}
                    altImg={hotel.description}
                    title={hotel.establishmentName}
                    text={hotel.description}
                    email={hotel.establishmentEmail}
                    Price={hotel.price}
                    guests={hotel.maxGuests}
                    catering={hotel.selfCatering}
                    map={<ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiaW5ha3Jpc3RpbmUiLCJhIjoiY2thbncwc3BiMXYyZTMxbG0zenQ2MWlnYSJ9.z1Kiyt5elDHNod9Ka2_neQ"
                    mapStyle="mapbox://styles/inakristine/ckanxddus67761ilku2tw8egn"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
                    >
                    <Marker
                    className="marker"
                    latitude={ latitude }
                    longitude={ longetude}
                    >
    
                    <div className="marker__dot"></div>
                    <h4 className="marker__name">{hotel.establishmentName}</h4>
                    </Marker>
    
                    </ReactMapGL>}
                />
                
            </div>
            :
            <div className='hotelspecificContainer'>
                <h1>no data</h1>
            </div>
    )
}

/*

"establishmentName": "Sunsssset Beach",
"establishmentEmail": "info@sunsetbeach.com",
"imageUrl": "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
"price": "85",
"maxGuests": "18",
"googleLat": "60.393388",
"googleLong": "5.228720",
"description": "Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below.",
"selfCatering": "true",
"id": "1" */