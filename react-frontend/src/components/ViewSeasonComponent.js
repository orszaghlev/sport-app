import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewSeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            season: {},
            competition: {}
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getSeasonById(this.state.id).then(res => {
            this.setState({season: res.data});
            MatchService.getCompetitionById(this.state.season.competitionId).then(res => {
                this.setState({competition: res.data});
            })
        })
    }

    return() {
        this.props.history.push('/seasons');
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
                            <label>Competition:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.competition.name}</div>
                        </div>
                        <div className="row">
                            <label>Started:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.started}</div>
                        </div>
                        <div className="row">
                            <label>Finished:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.finished}</div>
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

export default ViewSeasonComponent;