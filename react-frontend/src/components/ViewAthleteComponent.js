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
                <div className="card col-md-7 offset-md-2.5">
                    <div className="card-body">
                        <div className="row" >
                            <div style={{fontSize:"30px", marginTop:"10px", marginLeft:"25px", FontWeight: "bold"}}>{this.state.athlete.name} ({this.state.athlete.nationality})</div>
                        </div>

                        <br></br>
                        <div style={{height:"80px" ,horizontalAlign:"center", verticalAlign:"center", backgroundColor:"#e0e0d1"}}>
                            <div className="row" style={{marginLeft:"30px", paddingTop:"5px"}}>
                                <label>The athlete was born in</label>
                                <div style={{marginLeft: "5px"}}>{this.state.athlete.dateOfBirth}</div>
                                <label>.</label>
                            </div>
                            <div className="row" style={{marginLeft:"30px", marginTop:"-10px"}}>
                                <label>He/she plays as a(n) </label>
                                <div style={{marginLeft: "5px"}}>{this.state.athlete.position}</div>
                                <label>.</label>
                            </div>
                            <div className="row" style={{marginLeft:"30px", marginTop:"-10px"}}>
                                <label>His/her estimated value is</label>
                                <div style={{marginLeft: "5px"}}>{this.state.athlete.value}</div>
                                <div style={{marginLeft: "5px"}}>{this.state.athlete.valueCurrency}</div>
                                <label>.</label>
                            </div>
                        </div>
                        <br></br>
                        <div className="row" style={{marginLeft:"10px"}}>
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>&#60;&#60; Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAthleteComponent;