import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../constants'

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			address: '',
			city: '',
			state: '',
			zip: ''
		};
	}

	handleNameChange = (e) => {
		this.setState({ name: e.target.value});
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value});
	}

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value});
	}

	handleAddressChange = (e) => {
		this.setState({ address: e.target.value});
	}

	handleCityChange = (e) => {
		this.setState({ city: e.target.value});
	}

	handleStateChange = (e) => {
		this.setState({ state: e.target.value});
	}

	handleZipChange = (e) => {
		this.setState({ zip: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		//THIS IS WERE WE CONNECT THE BACKEND
		// this route matches the router auth route on the backend
		// for axios, the first parameter is where we want to go, and the second is what the data we want to send
		axios.post(SERVER_URL + '/auth/signup', this.state)
		.then(result => {
			console.log('SUCCESS', result)
			// Add the newly received token to LS
			localStorage.setItem('mernToken', result.data.token);
			// Udate the user with a call to App.js
			this.props.updateUser();
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}


	render() {
		if(this.props.user){
			return (<Redirect to="/profile" />);
		}
		return(
			<div className='login center row'>
				<h1><span className="usersName">Signup</span><br />as a new user</h1>
				<form className="auth-form center row" onSubmit={this.handleSubmit}>
					<div>
						<input name="Name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
					</div>
					<div>
						<input name="Email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input name="Password" placeholder="Password"type="password" value={this.state.password} onChange={this.handlePasswordChange} />
					</div>

					<div>
						<select name="state" value={this.state.state} onChange={this.handleStateChange}>
							<option value="">Select State</option>
							<option value="AL">AL</option>
							<option value="AK">AK</option>
							<option value="AR">AR</option>	
							<option value="AZ">AZ</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DC">DC</option>
							<option value="DE">DE</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="IA">IA</option>	
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="MA">MA</option>
							<option value="MD">MD</option>
							<option value="ME">ME</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MO">MO</option>	
							<option value="MS">MS</option>
							<option value="MT">MT</option>
							<option value="NC">NC</option>	
							<option value="NE">NE</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NM</option>			
							<option value="NV">NV</option>
							<option value="NY">NY</option>
							<option value="ND">ND</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VT">VT</option>
							<option value="VA">VA</option>
							<option value="WA">WA</option>
							<option value="WI">WI</option>	
							<option value="WV">WV</option>
							<option value="WY">WY</option>
						</select>
					</div>
					<div>
						<input name="Zip" placeholder="Zip" value={this.state.zip} onChange={this.handleZipChange} />
					</div>
					<input type="submit" value="Sign Me Up!" className="btn waves-effect waves-light searchbutton" />
				</form>
			</div>
		);
	}
}

export default Signup;