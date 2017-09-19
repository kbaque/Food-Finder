import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            data_array:null, 
            dataLoaded: false,
            // name:null,
            // foodFinder: null,
            redirect: false,
            
        }
    }

    componentDidMount() {
        axios.get('/foodFinder')
        .then(res => {
            console.log(res.data.data + "returned");
            this.setState({
               data_array: res.data.data,
               dataLoaded: true
            })
        }).catch(err => console.log(err))
    }
   

    renderPopular() {
        if (this.state.dataLoaded) {
            console.log(this.state.data_array)
            return this.state.data_array.map((place) =>{
                        return(
                            <ul>
                                    <li> <p> Name: {place.name} </p> </li>
                                    <li> <p> Address: {place.address} </p> </li>
                                    <li> <p> City: {place.city} </p> </li>
                                    <li> <p> State: {place.state} </p> </li>
                                    <li> <p> Area: {place.area} </p> </li>
                                    <li> <p> Postal Code: {place.postal_code} </p> </li>
                                    <li> <p> country: {place.country} </p> </li>
                                    <li> <p> Phone: {place.phone} </p> </li>
                                    <li> <p> Price: {place.price} </p> </li>
                                    <li> <p> Image: {place.image_url} </p> </li>
                             </ul>
                        )
                
            })
       } else return <p> Loading...</p>
    }
    
    render() {
        return (
            <div className="popular-page">
                {this.renderPopular()}
            </div>
        )
    }
}

export default Popular;