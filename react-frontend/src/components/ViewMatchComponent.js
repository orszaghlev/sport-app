import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {}
        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
        })
    }

    return() {
        this.props.history.push('/matches');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Match Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Season ID:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.season_id}</div>
                        </div>
                        <div className="row">
                            <label>Home Team:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.home_team}</div>
                        </div>
                        <div className="row">
                            <label>Away Team:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.away_team}</div>
                        </div>
                        <div className="row">
                            <label>Home Score:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.homeScore}</div>
                        </div>
                        <div className="row">
                            <label>Away Score:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.awayScore}</div>
                        </div>
                        <div className="row">
                            <label>Place:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.place}</div>
                        </div>
                        <div className="row">
                            <label>Date:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.match.date}</div>
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

export default ViewMatchComponent;