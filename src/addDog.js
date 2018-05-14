import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants'


class AddDog extends Component {
	constructor(props){
		super(props);
		this.state = {
			dogName: '',
			breed: '',
			temperament: '',
			age: '',
			dog: ''
		};
	}

	handleDogNameChange = (e) => {
		this.setState({ dogName: e.target.value});
	}

	handleBreedChange = (e) => {
		this.setState({ breed: e.target.value});
	}

	handleTemperamentChange = (e) => {
		this.setState({ temperament: e.target.value});
	}

	handleAgeChange = (e) => {
		this.setState({ age: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('add dog form was submitted', this.state, this.props.user);
		//THIS IS WERE WE CONNECT THE BACKEND
		// this route matches the router auth route on the backend
		// for axios, the first parameter is where we want to go, and the second is what the data we want to send
		let user = this.props.user
		console.log(user);
		axios.post(SERVER_URL + '/profile', {dog: this.state, user: this.props.user})
		.then(result => {
			console.log('SUCCESS after adding a dog', result.data)
			this.setState({
				dogs: result.data
			})
			this.props.reFetchData();	
			// this.props.updateDog(); //props must be passed when AddDog element is created
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}
	
	render() {
		if(this.props.user){
			return (
				<div>
					<h1>Add Your Dog!</h1>
					<form onSubmit={this.handleSubmit}>
						<div>
							<input name="dogName" placeholder="what is your dogs name?" value={this.state.dogName} onChange={this.handleDogNameChange} />
						</div>
						<div>
							<input name="breed" placeholder="breed" value={this.state.breed} onChange={this.handleBreedChange} />
						</div>
						<div>
							<select name="temperament" value={this.state.temperament} onChange={this.handleTemperamentChange}>
								<option value="opt1">Lovely Lil Pup</option>
								<option value="opt2">Will eat your face off</option>
								<option value="opt3">Somewhere in between</option>
							</select>
						</div>
						<div>
							<input name="age" placeholder="Age" value={this.state.age} onChange={this.handleAgeChange} />
						</div>
						<input type="submit" value="Add My Dog!" className="button" />
					</form>
				</div>
				);
			}
		return(
			<div>
				<p><a href="/login">Log In</a> to add a dog</p>
			</div>
		);
	}
}

export default AddDog;