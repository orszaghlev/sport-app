import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewHandballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            match: {},
            home_Team: {},
            away_Team: {},
            season: {},
            comp: {},
            handballStats: {},
            matchEvents: []
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
            MatchService.getTeamById(this.state.match.homeTeam).then(res => {
                this.setState({home_Team: res.data});
            })
            MatchService.getTeamById(this.state.match.awayTeam).then(res => {
                this.setState({away_Team: res.data});
            })
            MatchService.getSeasonById(this.state.match.seasonId).then(res => {
                this.setState({season: res.data});
                MatchService.getCompetitionById(this.state.season.competitionId).then(res => {
                    this.setState({comp: res.data});
                })
            })
        })

        MatchService.getEventsByMatchId(this.state.id).then((res) => {
            this.setState({matchEvents: res.data});
        });

        MatchService.getHandballStatsById(this.state.id).then(res => {
            this.setState({handballStats: res.data});
        })
    }

    return() {
        this.props.history.push('/matches');
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
                        <div className="text-center" style={{backgroundColor:"#33cc33", color:"#ffffff", height:"140px", horizontalAlign:"center", verticalAlign:"center"}}>
                            <div className="row">
                                <div style={{marginLeft: "25px"}}>{this.state.comp.sportType}</div>
                                <label style={{marginLeft: "5px"}}>-</label>
                                <div style={{marginLeft: "5px"}}>{<img src={this.state.comp.logoLink} alt="Competition_logo" height="18px" />}</div>
                                <div style={{marginLeft: "5px", fontWeight:"bold"}}>{this.state.comp.name}</div>
                            </div>
                            <table style={{marginBottom:"10px", fontSize:"22px", width:"483px"}}>
                                <tr className="align-top" style={{align:"center", height:"80px"}}>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center">{<img src={this.state.home_Team.imageLink} alt="Team" height="30px" />}</div>
                                        <div className="text-center" style={{marginLeft:"10px", width:"180px"}}>{this.state.home_Team.fullName}</div>
                                    </th>
                                    <th style={{align:"center", paddingTop:"30px"}}>
                                        <div className="text-center align-middle" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.homeScore}</div>
                                    </th>
                                    <th style={{align:"center", paddingTop:"30px"}}>
                                        <div className="text-center align-middle" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.match.awayScore}</div>
                                    </th>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center">{<img src={this.state.away_Team.imageLink} alt="Team" height="30px" />}</div>
                                        <div className="text-center" style={{marginLeft:"10px", width:"180px"}}>{this.state.away_Team.fullName}</div>
                                    </th>
                                </tr>
                            </table>
                        </div>


                        <div className="text-center align-middle" style={{height:"40px" , marginTop: "30px", paddingTop:"5px", backgroundColor:"#33cc33", color:"#ffffff", fontSize:"18px", fontWeight:"bold"}}>
                            EVENTS
                        </div>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center align-middle">Player</th>
                                    <th className="text-center align-middle">Type</th>
                                    <th className="text-center align-middle">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.matchEvents.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="3">No Events Available</td>
                                    </tr>:
                                    this.state.matchEvents.map(
                                        matchEvent =>
                                            <tr key = {matchEvent.id}>
                                                <td className="text-center align-middle">{matchEvent.id.athleteId} ({matchEvent.id.teamId})</td>
                                                <td className="text-center align-middle">{matchEvent.eventType}</td>
                                                <td className="text-center align-middle">{matchEvent.id.time}'</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>


                        <table className="text-center align-middle table table-striped" style={{marginLeft: "40px", marginTop:"30px", marginBottom:"10px", fontSize:"16px", width:"403px"}}>
                            <tr style={{backgroundColor:"#33cc33", color:"#ffffff"}}>
                                <th style={{width:"61px"}}>{this.state.home_Team.shortName}</th>
                                <th style={{width:"161px"}}>STATS</th>
                                <th style={{width:"61px"}}>{this.state.away_Team.shortName}</th>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hShootingEfficiency}%</td>
                                <td>Shooting efficiency</td>
                                <td>{this.state.handballStats.aShootingEfficiency}%</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hWingGoals}</td>
                                <td>Wing goals</td>
                                <td>{this.state.handballStats.aWingGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hFastbreakGoals}</td>
                                <td>Fastbreak goals</td>
                                <td>{this.state.handballStats.aFastbreakGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hSevenMeters}</td>
                                <td>7 meters</td>
                                <td>{this.state.handballStats.aSevenMeters}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hSaves}</td>
                                <td>Saves</td>
                                <td>{this.state.handballStats.aSaves}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hTwoMinPenalty}</td>
                                <td>2 minute penalties</td>
                                <td>{this.state.handballStats.aTwoMinPenalty}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hYellowCards}</td>
                                <td>Yellow cards</td>
                                <td>{this.state.handballStats.aYellowCards}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hGoalStreak}</td>
                                <td>Goal streak</td>
                                <td>{this.state.handballStats.aGoalStreak}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hGoalsInPowerplay}</td>
                                <td>Power play goals</td>
                                <td>{this.state.handballStats.aGoalsInPowerplay}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hShorthandedGoals}</td>
                                <td>Shorthanded goals</td>
                                <td>{this.state.handballStats.aShorthandedGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hSteals}</td>
                                <td>Steals</td>
                                <td>{this.state.handballStats.aSteals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hTechnicalFaults}</td>
                                <td>Technical faults</td>
                                <td>{this.state.handballStats.aTechnicalFaults}</td>
                            </tr>
                            <tr>
                                <td>{this.state.handballStats.hTimeouts}</td>
                                <td>Timeouts</td>
                                <td>{this.state.handballStats.aTimeouts}</td>
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

export default ViewHandballMatchComponent;