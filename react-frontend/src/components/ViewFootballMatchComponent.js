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

                        <table className="text-center align-middle table table-striped" style={{marginLeft: "0px", marginTop:"0px", marginBottom:"10px", fontSize:"16px", width:"483px"}}>
                            <tr>
                                <td style={{width:"161px"}}>{this.state.footballStats.hAttempts}</td>
                                <td style={{width:"161px"}}>Attempts</td>
                                <td style={{width:"161px"}}>{this.state.footballStats.aAttempts}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hOnTarget}</td>
                                <td>On target</td>
                                <td>{this.state.footballStats.aOnTarget}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hCorners}</td>
                                <td>Corners</td>
                                <td>{this.state.footballStats.aCorners}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hOffsides}</td>
                                <td>Offsides</td>
                                <td>{this.state.footballStats.aOffsides}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hPossession}</td>
                                <td>Possession</td>
                                <td>{this.state.footballStats.aPossession}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hPassingAccuracy}</td>
                                <td>Passing accuracy</td>
                                <td>{this.state.footballStats.aPassingAccuracy}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hPasses}</td>
                                <td>Passes</td>
                                <td>{this.state.footballStats.aPasses}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hPassesCompleted}</td>
                                <td>Passes completed</td>
                                <td>{this.state.footballStats.aPassesCompleted}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hYellow}</td>
                                <td>Yellow</td>
                                <td>{this.state.footballStats.aYellow}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hRed}</td>
                                <td>Red</td>
                                <td>{this.state.footballStats.aRed}</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hFouls}</td>
                                <td>Fouls</td>
                                <td>{this.state.footballStats.aFouls}</td>
                            </tr>
                        </table>



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