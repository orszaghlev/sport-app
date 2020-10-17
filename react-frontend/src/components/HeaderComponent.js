import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000" className="navbar-brand">Team Sport App</a></div>
                    <div><a href="http://localhost:3000/users">Users</a></div>
                    <div style={{marginLeft: "10px"}}><a href="https://trello.com/b/e1oxD2CF/sport-app-project">Trello</a></div>
                    <div style={{marginLeft: "10px"}}><a href="http://github.com/whoiszorz/sport-app">GitHub</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;