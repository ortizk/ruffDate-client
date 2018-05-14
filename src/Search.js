import React, { Component } from 'react';
import axios from 'axios';
import DogDisplay from './DogDisplay';

	
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
		axios.post('/getdogsnearby', {zip: this.state.zip})
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
						<div key={user.id}>
							<strong><p>{user.name}</p></strong>
							<p>{user.email}</p>
							<p>their dogs are:</p>
							<DogDisplay dogs={user.dogs} owner={user.name} />
							<hr />
						</div>
					);
				
			});
		}
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input name="Zip" placeholder="Zip" value={this.state.zip} onChange={this.handleZipChange} />
					</div>
					<input type="submit" value="Find Dogs!" className="button" />
				</form>
				<div>
					{results}
				</div>
			</div>
		);
	}
}


export default Search;