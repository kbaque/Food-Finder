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
//        if (some boolean === true) {
//            return (
//                <div>
//                 <Redirect /results
//                    <div>
//            )
//        } else {}
       
       return (
           <div className="home-page">
               <h2> Home </h2>
          <div className="login">
              <Link to='/login'>
               <button> Login </button>
               </Link>
          </div>
          <div className="register">
                <Link to='/register'>
                <button> Register </button>
                </Link>
          </div>
         <form className="search">
                <input onChange={this.props.handleInputChange} name="zip" type="text" placeholder="Zipcode"/>
                 <input  type="submit" value='Submit'/>
               <Link to='/results'></Link>
          </form>
        </div>
      )
   }
}

export default Home;