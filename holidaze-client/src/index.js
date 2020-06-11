import React from 'react';
import './scss/styles.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLogin from './pages/AdminLogin';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import BookingID from './pages/Booking';
import HotelSpecific from './pages/HotelSpecific';
import App from './App';

ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/Contact' component={Contact} />
				<Route path='/AdminLogin' component={AdminLogin} />
				<Route path='/Booking' component={Booking} />

				<Route path='/BookingID/:id' component={BookingID} />
				<Route path='/HotelSpecific/:id' component={HotelSpecific} />
			</Switch>
		</App>
	</Router>,

	document.getElementById('root')
);
