import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {

  let home = 'navbar__slider--1pos';
  let booking = 'navbar__slider--2pos';
  let contact = 'navbar__slider--3pos';
  let admin = 'navbar__slider--4pos';


  let [sliderpos, setSliderpos] = useState(home)
  let [menuicon, setMenuicon] = useState()
  let [navbar, setNavbar] = useState()

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

  let showHideMenu = () => {
    setMenuicon('navicon__hide');
    setNavbar('navbar');
  }

  let hidemenu = () => {
    setMenuicon('navicon');
    setNavbar('navbar__hide');
  }
  

  return (
    <nav>
    <div className={menuicon} onClick={showmenu}>
    <div className='navicon__bar'></div>
    <div className='navicon__bar'></div>
    <div className='navicon__bar'></div>
    </div>
    <div className={navbar} onClick={hidemenu}>
      <div className='navbar__link--mobile'><Link className='navbar__link' to='/'  onClick={ sliderHome } >Home</Link></div>
      <div className='navbar__link--mobile'><Link className='navbar__link' to='/Booking/' onClick={ sliderBooking } >Booking</Link></div>
      <div className='navbar__link--mobile'><Link className='navbar__link' to='/Contact/' onClick={ sliderContact }>Contact</Link></div>
      <div className='navbar__link--mobile'><Link className='navbar__link-right' to='/AdminLogin/'  onClick={ sliderAdmin } >Admin login</Link></div>
      <div className='navbar__line'></div>
      <div className={ sliderpos }></div>
    </div>
  </nav>
    

  );
}
