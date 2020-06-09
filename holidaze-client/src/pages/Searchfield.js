import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import establishments from '../json/establishments.json';


export default function Searchfield() {

	let [display, setDisplay] = useState(false);
	let [hotelNames, setHotelNames] = useState([]);
	let [search, setSearch] = useState('');

	useEffect(() => {
		const hotels = [];
		for (let i = 0; i < establishments.length; i++) {
			const element = establishments[i].establishmentName;
			hotels.push(element)
		}
		setHotelNames(hotels)
	}, []);

	const setHotel = chosenHotel => {
		setSearch(chosenHotel);
		setDisplay(false);
	}

	const onSubmit = () => {
		console.log('you are searcing for', search);
	}

	return (
		<div>
			<div className='searchfield'>
				<p className='searchfield__title'>Search for your favorite hotel:</p>
				<form onSubmit={onSubmit}>
					<input
						autoComplete='off'
						onChange={(event) => setSearch(event.target.value)}
						onClick={() => setDisplay(true)}
						className='searchfield__input'
						type='text'
						placeholder='Enter hotel name'
						name='Search'
						value={search} />

					<div  className='searchfield__submit'><Link to={`/HotelSpecific/${search}`}>GO</Link></div>
				</form>
				{display && (
					<div  className='searchfield__list'>
						{
							hotelNames.filter((value) => (value.toLowerCase()).indexOf(search.toLocaleLowerCase()) > -1)
								.map((value) => {
									return (<div onClick={() => setHotel(value)} className='listitem' key={value}>
										<span className='searchfield__output' key={value}>{value}</span>
									</div>)
								})
						}
					</div>
				)}

			</div>

		</div>

	);
}

// data.filter(x => x.title.toLowerCase().includes(term.toLowerCase()))