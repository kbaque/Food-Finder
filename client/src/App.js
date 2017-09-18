import React, { Component } from 'react';
import axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
    }
  }

  handleLoginSubmit = (e, username, password) => {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password
    }).then(res => {
      this.setState ({
        auth: res.data.auth,
        user: res.data.user
        // ##
      })
    }).catch(err => console.log(err));
  } 

  handleRegisterSubmit = (e, username, password, email, firstName, lastName) => {
    e.preventDefault();
    axios.post('/auth/register', {
      username,
      password,
      email,
      firstName,
      lastName
    }).then(res => {
      this.setState ({
        auth: res.data.auth,
        user: res.data.user
        //##
      })
    }).catch(err => console.log(err))
  }

  logOut = () => {
    axios.get('/auth/logout')
    .then(res => {
      this.setState ({
        auth: false,
        user: null,
        currentPage: 'login',
        redirect: true
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Login />
        <Register />
      
      </div>
    );
  }
}

export default App;
