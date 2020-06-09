import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {

  let home = 'navbar__slider--1pos';
  let booking = 'navbar__slider--2pos';
  let contact = 'navbar__slider--3pos';
  let admin = 'navbar__slider--4pos';


  let [sliderpos, setSliderpos] = useState(home)
  let [menuicon, setMenuicon] = useState('navicon')
  let [navbar, setNavbar] = useState('navbar__hide')

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
    menuicon === 'navicon'? setMenuicon('navicon__hide') : setMenuicon('navicon');
    navbar === ('navbar') ? setNavbar('navbar__hide') : setNavbar('navbar');
  }

  



  return (

    <nav className='navigation'>


    <div className={menuicon} onClick={showHideMenu}>
    <div className='navicon__bar' onClick={showHideMenu}></div>
    <div className='navicon__bar' onClick={showHideMenu}></div>
    <div className='navicon__bar' onClick={showHideMenu}></div>
    </div>
    <div className={navbar} onClick={showHideMenu}>
      <Link to='/'  onClick={ sliderHome } ><div  className='navbar__link'>Home</div></Link>
      <Link to='/Booking/' onClick={ sliderBooking } ><div  className='navbar__link'>Booking</div></Link>
      <Link to='/Contact/' onClick={ sliderContact }><div  className='navbar__link'>Contact</div></Link>
      <Link to='/AdminLogin/'  onClick={ sliderAdmin } ><div  className='navbar__link--right'>Admin login</div></Link>
    </div>
    <div className='navbar__line'></div>
    <div className={ sliderpos }></div>


  </nav>
    

  );
}
