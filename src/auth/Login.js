import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { withAlert } from 'react-alert';


class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value});
	}

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		//THIS IS WHERE WE CONNECT THE BACKEND
		// this route matches the router auth route on the backend
		// for axios, the first parameter is where we want to go, and the second is what the data we want to send
		axios.post(SERVER_URL + '/auth/login', this.state)
		.then(result => {
			console.log('SUCCESS', result);
			// Add the newly received token to LS
			localStorage.setItem('mernToken', result.data.token);
			// Udate the user with a call to App.js
			this.props.updateUser();
		})
		.catch(err => {
			// console.log('ERROR', err.response ? err.response.data : err);
			this.props.alert.show('hmmmm, not what we were expecting. Please try again.', {
			timeout: 2500 , // custom timeout just for this one alert
			type: 'success',
			onOpen: () => { console.log('hey') }, // callback that will be executed after this alert open
			onClose: () => { console.log('closed') } // callback that will be executed after this alert is removed
})
			console.log(this.props);
		});
	}

	render() {
		if(this.props.user){
			return (<Redirect to="/profile" />);
		} 
		return(
			<div className='login center row'>
				<h1><span className="usersName">LogIn</span><br />as an existing user</h1>
				<form className="auth-form center row" onSubmit={this.handleSubmit}>
					<div>
						<input name="Email" placeholder="Email?" value={this.state.email} onChange={this.handleEmailChange} />
					</div>
					<div>
						<input name="Password" placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
					</div>
					<input type="submit" value="Log Me In" className="btn waves-effect waves-light searchbutton" />
				</form>
			</div>
		);
	}
}

export default withAlert(Login);