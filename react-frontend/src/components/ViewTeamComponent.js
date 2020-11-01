import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewTeamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            team: {}
        }
    }

    componentDidMount() {
        MatchService.getTeamById(this.state.id).then(res => {
            this.setState({team: res.data});
        })
    }

    return() {
        this.props.history.push('/events');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Team Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Full Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.fullName}</div>
                        </div>
                        <div className="row">
                            <label>Short Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.shortName}</div>
                        </div>
                        <div className="row">
                            <label>Founding Date:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.foundingDate}</div>
                        </div>
                        <div className="row">
                            <label>Value:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.teamValue}</div>
                        </div>
                        <div className="row">
                            <label>Currency:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.valueCurrency}</div>
                        </div>
                        <div className="row">
                            <label>Image:</label>
                            <div style={{marginLeft: "5px"}}>{<img src={this.state.team.imageLink} alt="Team" width="200px" height="200px"/>}</div>
                        </div>
                        <div className="row">
                            <label>Home Place:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.team.homePlace}</div>
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

export default ViewTeamComponent;