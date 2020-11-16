import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewFootballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            footballStats: {}
        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
        })
        MatchService.getFootballStatsById(this.state.id).then(res => {
            this.setState({footballStats: res.data});
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
                    <div className="card-body">
                        <div className="text-center" style={{backgroundColor:"#33cc33", color:"#ffffff", height:"120px", horizontalAlign:"center", verticalAlign:"center"}}>
                            <div className="row">
                                <label style={{marginLeft: "25px"}}>Season:</label>
                                <div style={{marginLeft: "5px"}}>{this.state.match.seasonId}</div>
                            </div>
                            <table style={{marginLeft: "0px", marginTop:"0px", marginBottom:"10px", fontSize:"22px", width:"483px"}}>
                                <tr style={{align:"center", height:"80px"}}>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center" style={{marginRight:"0px"}}>{this.state.match.homeTeam}</div>
                                    </th>
                                    <th style={{align:"center"}}>
                                        <div className="text-center" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.homeScore}</div>
                                    </th>
                                    <th style={{align:"center"}}>
                                        <div className="text-center" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.awayScore}</div>
                                    </th>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center" style={{marginLeft:"0px"}}>{this.state.match.awayTeam}</div>
                                    </th>
                                </tr>
                            </table>
                        </div>

                        <div style={{marginLeft: "10px", marginTop: "10px"}}>Events:</div>

                        <div style={{marginLeft: "10px", marginTop: "10px"}}>Statistics:</div>

                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Attempts:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hAttempts}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aAttempts}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>On Target:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hOnTarget}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aOnTarget}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Corners:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hCorners}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aCorners}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Offsides:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hOffsides}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aOffsides}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Possession:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hPossession}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aPossession}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Passing Accuracy:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hPassingAccuracy}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aPassingAccuracy}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Passes:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hPasses}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aPasses}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Passes Completed:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hPassesCompleted}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aPassesCompleted}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Yellow:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hYellow}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aYellow}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Red:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hRed}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aRed}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Fouls:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.hFouls}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.footballStats.aFouls}</div>
                        </div>

                        <div style={{marginLeft:"10px"}}>
                            <div className="row">
                                <div style={{marginLeft: "10px", marginTop: "20px"}}>{this.state.match.date}</div>
                            </div>

                            <div className="row">
                                <label style={{marginLeft: "10px"}}>Played in the </label>
                                <div style={{marginLeft: "5px"}}>{this.state.match.place}</div>
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

export default ViewFootballMatchComponent;