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
				<div className="profileWelcome">
					<h1 className='center'>Hello again, <span className='usersName'>{this.props.user.name}</span>!</h1>
					{ this.props.dogs.length > 0 ? <YourDogs dogs={this.props.dogs} /> : <p><span className="usersName center row">You don't have any dogs yet</span></p> }
					<AddDog reFetchData={this.props.reFetchData} user={this.props.user} />
					<h1 className='search-header'>Search For Pups In Your Area</h1>
					<Search currentUser={this.props.user} />
				</div>
			);
		}
		return(
			<div>
				<h1 className="usersName center row">Thanks for stopping by</h1>
				<h3 className="center row">Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign Up</a>?</h3>
			</div>
		);
	}
}

export default Profile;