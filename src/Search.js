import React, { Component } from 'react';
import axios from 'axios';
import DogDisplay from './DogDisplay';
import { SERVER_URL } from './constants'
import dogImage from './images/logo.png';
	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			zip: '',
			users: null
		}
	}

	handleZipChange = (e) => {
		this.setState({ zip: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post(SERVER_URL + '/getdogsnearby', {zip: this.state.zip})
		.then(res => {
			console.log('result data nearby dogs', res.data);
			console.log('Success from handleSubmit in Search', res.data);
			this.setState({
				users: res.data
			})
		})
		.catch(err => {
			console.log('error', err);
		});
	}

	// TODO
		// request to the dog db to get users dog info useing the Object ids stored in user.
		// axios?

	render() {
		let currentUser = this.props.user 
		console.log('matched users', this.state.users)
		let results 
		if (this.state.users !== null) {
			results = this.state.users.map(user =>{
				
					return (
						<div className="yourDogCard col s12 m3 offset-m1 z-depth-3 center" key={user.id}>
							<div className='your-doggo-frame'>
								<img className='your-doggo' src={dogImage} alt="paw" />
							</div>
							<div className='owner-dog-info'>
								<strong><p>Owner: {user.name}</p></strong>
								<p>Contact: {user.email}</p>
								<p>Their dogs are:</p>
								<DogDisplay dogs={user.dogs} owner={user.name} />
							</div>
						</div>
					);
				
			});
		}
		return(
			<div className='this-is-the-Search-div center row'>
				<form onSubmit={this.handleSubmit}>
					<div className='col s12 m8 offset-m2 searchform'>
						<input name="Zip" placeholder="Zip" value={this.state.zip} onChange={this.handleZipChange} />
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<input type="submit" value="Find Dogs!" className="btn waves-effect waves-light searchbutton" />
				</form>
				<div className='row'>
					<div className='doggo-display results col s12 m8 offset-m1'>
						{results}
					</div>
				</div>
			</div>
		);
	}
}


export default Search;