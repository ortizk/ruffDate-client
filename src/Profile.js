import React, { Component } from 'react';
import AddDog from './addDog';
import axios from 'axios';
import Search from './Search';
// import Founduser from './foundUser';
import YourDogs from './YourDogs';

class Profile extends Component {

	render() {
		if(this.props.user){
			var usersDogs = Array.from(this.props.dogs)
			console.log('userDogs from profile', usersDogs)
			// if(usersDogs.length > 0){

						
			// }
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
					{ this.props.dogs.length > 0 ? <YourDogs dogs={this.props.dogs} /> : <p>You don't have any dogs yet</p> }
					<AddDog reFetchData={this.props.reFetchData} user={this.props.user} />
					<h1>Search For Pups In Your Area</h1>
					<Search currentUser={this.props.user} />
				</div>
			);
		}
		return(
			<div>
				<p>PROFILE PAGE</p>
				<p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign Up</a>?</p>
			</div>
		);
	}
}

export default Profile;