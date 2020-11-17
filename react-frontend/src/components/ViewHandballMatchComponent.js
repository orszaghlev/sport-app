import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewHandballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            homeTeam: {},
            awayTeam: {},
            handballStats: {}
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
        MatchService.getHandballStatsById(this.state.id).then(res => {
            this.setState({handballStats: res.data});
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
                            <label>Shooting Efficiency:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hShootingEfficiency}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aShootingEfficiency}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Wing Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hWingGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aWingGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Fastbreak Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hFastbreakGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aFastbreakGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Seven Meters:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hSevenMeters}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aSevenMeters}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Saves:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hSaves}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aSaves}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Two Min Penalty:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hTwoMinPenalty}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aTwoMinPenalty}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Yellow Cards:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hYellowCards}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aYellowCards}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Goal Streak:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hGoalStreak}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aGoalStreak}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Power Play Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hGoalsInPowerplay}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aGoalsInPowerplay}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Shorthanded Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hShorthandedGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aShorthandedGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Steals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hSteals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aSteals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Technical Faults:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hTechnicalFaults}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aTechnicalFaults}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Timeouts:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.hTimeouts}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.handballStats.aTimeouts}</div>
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

export default ViewHandballMatchComponent;