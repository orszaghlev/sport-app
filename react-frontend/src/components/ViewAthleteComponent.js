import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewAthleteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            athlete: {},
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getAthleteById(this.state.id).then(res => {
            this.setState({athlete: res.data});
        })
    }

    return() {
        this.props.history.push('/athletes');
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <div className="row">
                            <label>Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.name}</div>
                        </div>
                        <div className="row">
                            <label>Date of Birth:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.dateOfBirth}</div>
                        </div>
                        <div className="row">
                            <label>Value:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.value}</div>
                        </div>
                        <div className="row">
                            <label>Value Currency:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.valueCurrency}</div>
                        </div>
                        <div className="row">
                            <label>Position:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.position}</div>
                        </div>
                        <div className="row">
                            <label>Nationality:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.athlete.nationality}</div>
                        </div>
                        <br></br>
                        <div className="row">
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAthleteComponent;