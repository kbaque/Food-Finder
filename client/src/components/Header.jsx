import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div className="header">
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/popular'>Popular</Link></li>
                {/* <li><Link onClick={props.logOut} to='#'>Log Out</Link></li> */}
                </ul>
            </nav>
            </div>
        )
    }
}


export default Header;