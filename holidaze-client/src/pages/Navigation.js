import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {

  let home = 'navbar__slider--1pos';
  let booking = 'navbar__slider--2pos';
  let contact = 'navbar__slider--3pos';
  let admin = 'navbar__slider--4pos';


  let [sliderpos, setSliderpos] = useState(home)

  let sliderHome = () => {
    setSliderpos(home);
  }

  let sliderBooking = () => {
    setSliderpos(booking);
  }

  let sliderContact = () => {
    setSliderpos(contact);
  }

  let sliderAdmin = () => {
    setSliderpos(admin);
  }
  


  return (


    <nav>
    <div className='navbar'>
      <Link className='navbar__link' to='/'  onClick={ sliderHome } >Home</Link>
      <Link className='navbar__link' to="/Booking/" onClick={ sliderBooking } >Booking</Link>
      <Link className='navbar__link' to="/Contact/" onClick={ sliderContact }>Contact</Link>
      <Link className='navbar__link-right' to="/AdminLogin/"  onClick={ sliderAdmin } >Admin login</Link>
      <div className='navbar__line'></div>
      <div className={ sliderpos }></div>
    </div>
  </nav>
    

  );
}
