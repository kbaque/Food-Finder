import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Location from './Location';

class Results extends Component {
    
    renderSearch() {
        if(this.props.searchInfoLoaded) {
            console.log('here')
            return this.props.searchInfo.restaurants.map((results) => {
                  return <Location
                          key={results.id}
                          searchInfo={results} />
                      })
                    } else {
                      return <h1>Loading...</h1>
                    }
                  }


    render() {
            return (
                  <div className="searchpage">
                   <h2>Restaurants</h2>
                     {this.renderSearch()}
                  </div>
        )
    }
}

export default Results;
