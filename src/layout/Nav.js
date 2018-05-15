import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import dogImage from '../images/logo.png';

class Nav extends Component {
	handleLogout = (e) => {
		console.log("logging out...");
		e.preventDefault();
		localStorage.removeItem('mernToken');
		this.props.updateUser();
		
	}

	render() {
		let links = '';
		if(this.props.user){
			links = (
				<span>
					<a onClick={this.handleLogout}>Logout</a>
					<Link to="/profile">Profile</Link>
				</span>
			);
		}
		else {
			links = (
				<span>
					<Link to="/login">Log in</Link>
					<Link to="/signup">Sign Up</Link>
				</span>
			);
		}		

		return(
			<div>
				<nav className="nav">
					<img className='nav-logo' src={dogImage} alt='dog logo' />
					<span>
						<Link to="/">Home</Link>
						{links}
					</span>
				</nav>

			</div>
		);
	}
}

export default Nav;