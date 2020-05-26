import React from 'react';
import { Link } from 'react-router-dom';


  const Navigation = (props) => {
    const { sliderPos } = props;
	return (

    <nav>
    <div className='navbar'>
        <Link className='navbar__link' to='/'>Home</Link>
        <Link className='navbar__link' to="/Booking/">Booking</Link>
        <Link className='navbar__link' to="/Contact/">Contact</Link>
        <Link className='navbar__link-right' to="/AdminLogin/">Admin login</Link>
        <div className='navbar__line'></div>
        <div className='navbar__slider--1pos'></div>
      </div>
    </nav>

    )
}

export default Navigation;