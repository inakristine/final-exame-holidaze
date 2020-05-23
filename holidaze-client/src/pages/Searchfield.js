import React, { useState, useEffect } from 'react';
import establishments from '../json/establishments.json';


export default function Searchfield() {

	let [display, setDisplay] = useState(false);
	let [options, setOptions] = useState(establishments);
	let [hotelNames, setHotelNames] = useState([]);
	let [search, setSearch] = useState('');

	useEffect(() => {
		const hotels = [];
			for (let i = 0; i < options.length; i++) {
				const element = options[i].establishmentName;
				console.log(element)
				hotels.push(element)
			}
			console.log("melk", hotels)
			setHotelNames(hotels)
	}, []);

	const setHotel = chosenHotel => {
		setSearch(chosenHotel);
		setDisplay(false);
	}
console.log("kake", hotelNames);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(search);
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
						placeholder="Enter hotel name"
						name="Search"
						value={search}/>
					<input className='searchfield__submit' type='submit'></input>
				</form>
				{display && (
					<div>
					{
						hotelNames.filter((value) => (value.toLowerCase()).indexOf(search.toLocaleLowerCase()) > -1)
						.map((value, i) => {
						return (<div onClick={() => setHotel(value)} className='listitem' key={i}>
						<span className='searchfield__output'>{value}</span>
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