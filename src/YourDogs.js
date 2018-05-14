import React, { Component } from 'react';
import axios from 'axios';
// import { Card, CardTitle, Col } from 'react-materialize'  

// Paw by Anton Gajdosik from the Noun Project
class YourDogs extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let displayDogs
		let usersDogs = Array.from(this.props.dogs) 
		if (usersDogs !== null) {
			displayDogs = usersDogs.map(dog =>{
				
					return (
						<div className="yourDogCard"key={dog._id}>
							<img src="../public/dogImagePlaceHolder.png" alt="paw" />
						    <p><strong>{dog.dogName}</strong></p>
							<p>{dog.breed}</p>
							<p>{dog.age}</p>

						</div>
					);
				
			});
		}

		return (
			<div>
				{displayDogs}
			</div>
		)
	}
}


export default YourDogs;