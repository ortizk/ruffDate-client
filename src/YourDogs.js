import React, { Component } from 'react';
import axios from 'axios';
import dogImage from './images/logo.png';
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
					<div className="yourDogCard col s12 m3 offset-m2 z-depth-3 center" key={dog._id}>
						<div className='your-doggo-frame'>
							<img className='your-doggo' src={dogImage} alt="paw" />
						</div>
					    <p><strong>{dog.dogName}</strong></p>
						<p>{dog.breed}</p>
						<p>{dog.age}</p>

					</div>
				);
				
			});
		}

		return (
			<div className='row'>
				<div className='doggo-display col s12 m10 offset-m1 '>
					<h3 className="usersName center">Your Dogs</h3>
					<br />
					<br />
					{displayDogs}
				</div>
			</div>
		)
	}
}


export default YourDogs;