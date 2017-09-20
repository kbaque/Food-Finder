import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class Results extends Component {
    constructor(props){
        super(props);

        this.renderSearch = this.renderSearch.bind(this);
        // this.handleClickSave = this.handleClickSave.bind(this);
    }

//     handleClickSave(){
//         console.log("save save");
//         axios.post('/rShare
//         /save', {
//         home_user: 'Fred',
//         peer_user: 'Flintstone',
//         code: this.state.html
//     })
//       .then(function (res) {
//       console.log(res);
//    })
//       .catch(function (error) {
//    console.log(error);
//  });

// }  
    
    renderSearch() {
        if(this.props.searchInfoLoaded) {
            console.log('here')
            return this.props.results.map((results, index) => {
                  return (  
                    
                    <div className="data" key={index}>
                        <center>
                            <ul>
                       <p> <img src={results.image_url} alt={results.image_url} /> </p>
                        
                        <li><h4> Name: {results.name}</h4></li> 
                        <li><p> Address: {results.address}</p></li>
                        <li><p> City: {results.city}</p></li>
                        <li><p> State: {results.state}</p></li>
                        <li><p> Area: {results.area}</p></li>
                        <li><p> Postal code: {results.postal_code}</p></li>
                        <li><p> Country: {results.country}</p></li>
                        <li><p> Price: {results.price} </p></li>
                        </ul>
                        </center>
                        {/* <button onClick= {()=>this.handleClickSave()}>Save</button> */}
                    </div>
                         );
                      })
                    } else {
                      return
                 <h1>Loading...</h1>
                    }
                  }


    render() {
            return (
                  <div className="searchpage">
                   <h3> Restaurants</h3>
                     {this.renderSearch()}
                  </div>
        )
    }
}

export default Results;
