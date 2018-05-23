import React, { Component } from 'react';
import { Link } from 'react-router-dom';


	
class Home extends Component {
	render() {
		return(
			<div className="welcomeBackGround">
				<div className="welcomeBox">
					<h1>offLeash</h1>
					<br/>
					<h4>Find dogs in your area for walks and park visits!</h4>
					<h4>Log in to find the right puppy friend for your dog</h4>
					<div className='search-now'><Link to="/login" className='btn waves-effect light-effect'>SEARCH</Link></div>
				</div>
			</div>
		);
	}
}


export default Home;