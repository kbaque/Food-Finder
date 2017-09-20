import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userData: false
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState ({
            [name]: value
        });
    }

  render() {
       return (
           <div className="home-page">
               <center>
                   <div className="title">
               <h2> Find restaurants near you 🍽 </h2>
               </div>
               </center>
          <center>
         <form className="search" onSubmit={this.props.handleClickZip}> 
                <input className="zipcode" onChange={this.props.handleInputChange} name="zip" type="text" placeholder="Zipcode"/>
{/*               <h1>   <input  type="submit" value='search' />  </h1> */}
                    <div className="mdl-card__actions mdl-card--border">
                        <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" id="search" type="submit" value='Search' onClick={this.handleSubmit} />
                    </div> 
               <Link to='/results'></Link>
          </form>
          </center>
        </div>
      )
   }
}

export default Home;