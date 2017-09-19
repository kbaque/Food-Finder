import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Results from './Results';

class Search extends Component {
   constructor() {
       super();
       this.state = {
         searchInfo: null,
         searchInfoLoaded: false,
         redirect: false,
         search: null,
       }
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
   }

handleSearch() {
    axios.get(`http://opentable.herokuapp.com/api/restaurants?zip=${this.state.search}`)
    .then(res => {
    //console.log(res.data)
      this.setState({
        searchInfo: res.data,
        searchInfoLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

inputSearch(e){
    console.log(e.target.value);
    this.setState({search: e.target.value})
}

//    removeFromLists = data => {
//        axios.delete(`/search/${data.search_id}`)
//        .then(res => {
//            let currentSearch = this.state.apiData;
//            currentSearch = currentSearch.filter(search => {
//                return search.search_id !== data.search_id
//            });
//            this.setState({
//                apiData: currentSearch
//            });
//        }).catch(err => {
//            console.log(err);
//        })
//    }

    render() {
        return (
            <Router>
                <div>
                    <Home 
                    inputSearch={this.inputSearch}
                    handleSearch={this.handleSearch}
                    searchInfo={this.state.searchInfo}
                    />
                    <Route exact path='/results' render={() => <Results
          dataLoaded={this.state.searchInfoLoaded}
          searchInfo={this.state.searchInfo}
          /> } />
               </div>
            </Router>
        )
    } 
  }

export default Search;
