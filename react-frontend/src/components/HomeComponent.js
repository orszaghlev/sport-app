import React, {Component} from "react";
import AuthService from "../services/AuthService.js";
import UserService from "../services/UserService.js";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            content: ""
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            this.setState({currentUser: currentUser, userReady: true})
        }

        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    getUserLoginInfo() {
        if (!this.state.userReady) {
           return <h3><a href="http://localhost:8081/register">Sign up</a> or <a href="http://localhost:8081/login">log in</a> to access content!</h3>
        } else {
           return <h3>Welcome {this.state.currentUser.username}!</h3>
        }
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Sport app project for DE-IK Software Development Methodologies course.</h3>
                    <br></br>
                    {this.getUserLoginInfo()}
                </header>
            </div>
        );
    }
}