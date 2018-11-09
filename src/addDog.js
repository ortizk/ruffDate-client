import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants'
import { Modal, Button } from 'react-materialize';
import fs from 'fs';

class AddDog extends Component {
	constructor(props){
		super(props);
		this.state = {
			dogName: '',
			breed: '',
			temperament: '',
			age: '',
			dog: '',
			img: null
		};
	}

	handleDogNameChange = (e) => {
		this.setState({ dogName: e.target.value});
	}

	handleBreedChange = (e) => {
		this.setState({ breed: e.target.value});
	}

	handleTemperamentChange = (e) => {
		this.setState({ temperament: e.target.value});
	}

	handleAgeChange = (e) => {
		this.setState({ age: e.target.value});
	}

	fileSelectedHandler = (e) => {
		this.setState({ img: e.target.files[0]}, () => {
			console.log("TTTHIIISSSS", this.state)
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('SUBMIT FNC', this.state)
		// const fd = new FormData();
		// fd.append('img', this.state.img);
		// console.log("FFFDDD", fd);

		// axios({ 
		// 	method: 'POST', 
		// 	url: SERVER_URL + '/profile', 
		// 	headers: { 'content-type': 'multipart/form-data' }, 
		// 	data: { dog: this.state, user: this.props.user, img: this.state.img } 
		// })

		// axios.post(SERVER_URL + '/profile', 
		// 	{dog: this.state, user: this.props.user, img: this.state.img, form: document.getElementsByTagName('form')[0].serialize() })
		// .then(result => {
		// 	console.log('SUCCESS after adding a dog', result.data)
		// 	this.setState({
		// 		dogs: result.data
		// 	})
		// 	this.props.reFetchData();	
		// 	// this.props.updateDog(); //props must be passed when AddDog element is created
		// })
		// .catch(err => {
		// 	console.log('ERROR', err);
		// });

		var form = new FormData();
 
		form.append('dog', this.state.dogName);
		form.append('img', this.state.img);
		form.append('age', this.state.age);
		form.append('temperament', 'tbd');
		form.append('breed', this.state.breed);
		form.append('userId', this.props.user.id);
		 
		fetch(SERVER_URL + '/profile', { method: 'POST', body: form })
		    .then((res) => {
		        return res.json();
		    }).then((result) => {
		        console.log('SUCCESS after adding a dog', result)
				this.props.reFetchData();
		    }).catch((err) => {
		        console.log('err', err);
		    });
	}
	
	render() {
 		if(this.props.user){
				return (
					<div className='add-dog center'>
						<Modal
				  			header='Add Your Dog'
				  			trigger={<Button floating large className='red' waves='light' icon='add' />}>
							<div>
								<form encType="multipart/form-data" onSubmit={this.handleSubmit}>
									<div>
										<input name="dogName" placeholder="what is your dogs name?" value={this.state.dogName} onChange={this.handleDogNameChange} />
									</div>
									<div>
										<input name="breed" placeholder="breed" value={this.state.breed} onChange={this.handleBreedChange} />
									</div>
									<div>
										<select name="temperament" value={this.state.temperament} onChange={this.handleTemperamentChange}>
											<option value="opt1">Lovely Lil Pup</option>
											<option value="opt2">Will eat your face off</option>
											<option value="opt3">Somewhere in between</option>
										</select>
									</div>
									<div>
										<input name="age" placeholder="Age" value={this.state.age} onChange={this.handleAgeChange} />
									</div>
									<input type="file" name="img" onChange={this.fileSelectedHandler} />
									<input type="submit" value="Add My Dog!" className="btn" />
								</form>
							</div>
						</Modal>
					</div>
					);
				}
		return(
			<div>
				<p><a href="/login">Log In</a> to add a dog</p>
			</div>
		);
	}
}

export default AddDog;