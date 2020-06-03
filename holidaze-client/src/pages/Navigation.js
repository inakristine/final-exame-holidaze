import React, { useState } from 'react';
import Navigation from '../components/nav';

export default function navigation(props) {

  let [sliderpos, setSliderpos] = useState('navbar__slider--1pos');
  return (

    <nav>
      <div className='navbar'>
        <Navigation
          sliderPos={sliderpos}
        />
      </div>
    </nav>

  );
}

