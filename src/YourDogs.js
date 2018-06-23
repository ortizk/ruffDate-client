import React, { Component } from 'react';
import axios from 'axios';
import dogImage from './images/logo.png';
import { Button } from 'react-materialize';
// import { Card, CardTitle, Col } from 'react-materialize'  

// Paw by Anton Gajdosik from the Noun Project
class YourDogs extends Component {
	constructor(props){
		super(props);
		this.state = {
			dogid: '',
			userid: ''
		}
	}

	componentDidMount(){
		this.setState({
			userid: this.props.user.id
		})
		console.log(this.state)
	}

	// handleDelete = (dogid, userid) => {
	// 	console.log('THIS IS THE DOGID', dogid)
	// 	console.log('THIS IS THE USERID', userid)
	// 	console.log('this is the state', this.state.dog)
	// 	axios.delete('http://localhost:3001/deletedog', { data: { dogid: dogid, userid: userid }})
	// 	.then(res => {
	// 		console.log(res)
	// 		console.log('success, deleted dog');
	// 		console.log(res.data)
	// 	})
	// 	.catch(function (err) {
	// 		console.log('error from delete method:', err)
	// 	})
	// }

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