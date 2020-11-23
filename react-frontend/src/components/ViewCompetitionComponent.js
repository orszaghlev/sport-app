import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            competition: {}
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getCompetitionById(this.state.id).then(res => {
            this.setState({competition: res.data});
        })
    }

    return() {
        this.props.history.push('/competitions');
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
                            <div style={{marginLeft: "30px"}}>{<img src={this.state.competition.logoLink} alt="Logo" height="80px"/>}</div>
                            <div style={{fontSize:"35px", marginTop:"10px", marginLeft:"25px", FontWeight: "bold"}}>{this.state.competition.name}</div>
                        </div>

                        <div style={{height:"70px" ,horizontalAlign:"center", verticalAlign:"center", paddingLeft:"30px", marginTop:"10px" , backgroundColor:"#e0e0d1"}}>
                            <div className="row" style={{paddingTop:"5px"}}>
                                <div >{this.state.competition.sportType}</div>
                                <label style={{marginLeft: "5px"}}>competition.</label>
                            </div>
                            <div className="row" style={{}}>
                                <label>Region:</label>
                                <div style={{marginLeft: "5px"}}>{this.state.competition.region}</div>
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

export default ViewCompetitionComponent;