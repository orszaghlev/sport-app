import React, {Component} from "react";
import UserService from "../services/UserService.js";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
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

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Sport app project for DE-IK Software Development Methodologies course.</h3>
                    <h3><a href="http://localhost:8081/register">Sign up</a> or <a href="http://localhost:8081/login">log in</a> to access content!</h3>
                </header>
            </div>
        );
    }
}