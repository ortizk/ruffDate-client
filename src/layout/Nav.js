import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

class Nav extends Component {
	handleLogout = (e) => {
		console.log("logging out...");
		e.preventDefault();
		localStorage.removeItem('mernToken');
		this.props.updateUser();
		
	}

	render() {
		<Navbar brand='/images/logo.png' left>
			<NavItem href='get-started.html'>Getting started</NavItem>
			<NavItem href='components.html'>Components</NavItem>
		</Navbar>
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
					<Link to="/">Home</Link>
					{links}
				</nav>

			</div>
		);
	}
}

export default Nav;