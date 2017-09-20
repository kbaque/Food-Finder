import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Popular from './components/Popular';
import Search from './components/Search';
import Results from './components/Results';


import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      user: null,
      currentPage: '/',
      redirect: false,
      search: null,
      searchInfoLoaded: false,
      zip:'',
      apiData: [],
      apiDataLoaded: false
    }

    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickZip=this.handleClickZip.bind(this);
  }

  componentWillUpdate = (prevState, nextState) => {
    if(nextState.redirect){
      this.setState({
        redirect: false,
        currentPage: '/'
      });
      return true;
    } else {
      return false;
    }
  }

  handleInputChange(e) {
    console.log (e.target.value );
    const name = e.target.name;
    const value = e.target.value;
    this.setState ({
      [name]:value
    })
  }

  handleLoginSubmit = (e, username, password) => {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password
    }).then(res => {
      this.setState ({
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
        redirect: true
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
        user: res.data.user,
        currentPage: 'home',
        redirect: true
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

  handleInputSearch(e) {
    console.log (e.target.value );
    this.setState ({
      search: e.target.value, 
    })
  }

  handleClickZip(e){
    console.log ("click" + this.state.zip)
    e.preventDefault();
    axios.get(`/search/zip/${this.state.zip}`)
        .then(res => {
         console.log (res);
         this.setState({
               apiData: res.data.data.restaurants,
               searchInfoLoaded: true,
          currentPage: 'results',
          redirect: true
              })
        })
        .catch(err => console.log(err))
  }

  render() {
    const {redirect} = this.state;
    const {currentPage} = this.state;
    return (
      <Router>
      <div className="App">
        <Header logOut={this.logOut} authState={this.state.auth} />
      <div className ="main-page">
        {redirect ? (<Redirect to={`/${currentPage}`}/>) : null}
       <Switch>
          <Route exact path='/' render={() => <Home handleInputSearch={this.handleInputSearch}          
               handleInputChange ={this.handleInputChange}
               handleClickZip={this.handleClickZip}
               handleResults={this.handleResults}/> } />
          <Route exact path="/login" render={() => <Login submit={this.handleLoginSubmit}  /> } />
          <Route exact path="/register" render={() => <Register submit={this.handleRegisterSubmit} /> } />
          <Route exact path="/popular" component={Popular}  />
          <Route exact path="/results" render={() => <Results results={this.state.apiData} searchInfoLoaded={this.state.searchInfoLoaded} /> } />
        </Switch>
        </div>
       </div>
      </Router>
    );
  }
}

export default App;
