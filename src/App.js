import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Footer from './layout/Footer'
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
import { SERVER_URL } from './constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      dogs: null
    }
  }

  componentDidMount = () => {
    //the loading of this component happened correctly
    this.getUser();
  }


  getUser = () => {
    var token = localStorage.getItem('mernToken');
    // if there is a token in localStorage try to elevate it
    if(token){
      axios.post(SERVER_URL + '/auth/me/from/token', {
        headers: { 
          'Authorization': `Bearer ${token}`
           },
        token: token
      })
      .then(response => {
        console.log('SUCCESS getting user', response.data);
        this.setState({
          user: response.data.user,
          dogs: response.data.user.dogs
        }, () => {
          this.refetchData();
        });
        
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
        localStorage.removeItem('mernToken');
        this.setState({
          user: null
        });
      });
    }
    else {
      localStorage.removeItem('mernToken');
      this.setState({
        user: null
      });
    }
  }

  refetchData = () =>{
    console.log('this is the this.state.user.id: ', this.state.user.id)
    axios.get(SERVER_URL + '/profile/' + this.state.user.id)
    .then(res => {
      // const results = res.data;
      console.log('Success refetch:', res.data);
      this.setState({
        user: res.data.user,
        dogs: res.data.user.dogs
      })
    })
    .catch(err => {
      console.log('error', err);
    });
  }

  render() {
    return (
      <div className="App">

        <Router>
          <div >
            <Nav user={this.state.user} updateUser={this.getUser}/>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} dogs={this.state.dogs} reFetchData={this.refetchData}/>)
            } />
          </div>
        </Router>
        <Footer />  
      </div>
    );
  }
}

export default App;
