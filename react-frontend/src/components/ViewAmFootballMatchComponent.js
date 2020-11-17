import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewAmFootballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            homeTeam: {},
            awayTeam: {},
            amFootballStats: {}
        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
            MatchService.getTeamById(this.state.match.homeTeam).then(res => {
                this.setState({homeTeam: res.data});
            })
            MatchService.getTeamById(this.state.match.awayTeam).then(res => {
                this.setState({awayTeam: res.data});
            })
        })
        MatchService.getAmFootballStatsById(this.state.id).then(res => {
            this.setState({amFootballStats: res.data});
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
                                        <div className="text-center" style={{marginRight:"0px"}}>{this.state.homeTeam.fullName}</div>
                                    </th>
                                    <th style={{align:"center"}}>
                                        <div className="text-center" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.homeScore}</div>
                                    </th>
                                    <th style={{align:"center"}}>
                                        <div className="text-center" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.awayScore}</div>
                                    </th>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center" style={{marginLeft:"0px"}}>{this.state.awayTeam.fullName}</div>
                                    </th>
                                </tr>
                            </table>
                        </div>

                        <div style={{marginLeft: "10px", marginTop: "10px"}}>Events:</div>

                        <div style={{marginLeft: "10px", marginTop: "10px"}}>Statistics:</div>

                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Touchdowns:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hTouchdowns}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aTouchdowns}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Field Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hFieldGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aFieldGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Extra Point:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hExtraPoint}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aExtraPoint}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Two Point:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hTwoPoint}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aTwoPoint}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Total Yards:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hTotalYards}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aTotalYards}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Passing Yards:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hPassingYards}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aPassingYards}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Rushing Yards:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hRushingYards}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aRushingYards}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Average Yards Per Play:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hAvgYrdsPerPlay}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aAvgYrdsPerPlay}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Fumbles:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hFumbles}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aFumbles}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Interceptions:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hInterceptions}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aInterceptions}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Punts:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hPunts}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aPunts}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Time of Possession:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hTimeOfPossession}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aTimeOfPossession}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Penalties:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hPenalties}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aPenalties}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Yards Penalized:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.hYardsPenalized}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.amFootballStats.aYardsPenalized}</div>
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

export default ViewAmFootballMatchComponent;