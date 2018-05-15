import React, { Component } from 'react';

	
class DogDisplay extends Component {
	render() {
		let dogs = this.props.dogs || [];
		dogs = dogs.map((d, i) => {
			return (
				<div key={i}>{d.dogName}</div>
				);
		});
		return(
			<div>
				{dogs}
			</div>
		);
	}
}


export default DogDisplay;