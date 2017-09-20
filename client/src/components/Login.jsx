import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState ({
            [name]: value
        });
    }
   
    render(){
        return (
            
                <div className="log-container">
                    <center>
            <div className="login-page mdl-card mdl-shadow--8dp">
                <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Login</h2>
            </div>
                <form onSubmit={(e) => this.props.submit(e, this.state.username, this.state.password)}>
                <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" id="username" type="text" required="true" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="username">Username...</label>
                        </div>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" id="password" type="password" required="true" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            <label className="mdl-textfield__label" htmlFor="password">Password...</label>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                    <input className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" type="submit" value='Log In!' onClick={this.handleSubmit} />
                </div>
                </form>
            </div>
            </center>
            </div>
            
        )
    }
}

export default Login;