import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewAmFootballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            playedmatch: {},
            home_Team: {},
            away_Team: {},
            season: {},
            comp: {},
            amFootballStats: {},
            matchEvents: []
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({playedmatch: res.data});
            MatchService.getTeamById(this.state.playedmatch.homeTeam).then(res => {
                this.setState({home_Team: res.data});
            })
            MatchService.getTeamById(this.state.playedmatch.awayTeam).then(res => {
                this.setState({away_Team: res.data});
            })
            MatchService.getSeasonById(this.state.playedmatch.seasonId).then(res => {
                this.setState({season: res.data});
                MatchService.getCompetitionById(this.state.season.competitionId).then(res => {
                    this.setState({comp: res.data});
                })
            })
        })

        MatchService.getEventsByMatchId(this.state.id).then((res) => {
            this.setState({matchEvents: res.data});
        });

        MatchService.getAmFootballStatsById(this.state.id).then(res => {
            this.setState({amFootballStats: res.data});
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
                                        <div className="text-center align-middle" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.playedmatch.homeScore}</div>
                                    </th>
                                    <th style={{align:"center", paddingTop:"30px"}}>
                                        <div className="text-center align-middle" style={{FontWeight: "bold", backgroundColor:"#1f7a1f", width:"40px", height:"40px"}}>{this.state.playedmatch.awayScore}</div>
                                    </th>
                                    <th style={{align:"center", width:"200px"}}>
                                        <div className="text-center">{<img src={this.state.away_Team.imageLink} alt="Team" height="30px" />}</div>
                                        <div className="text-center" style={{marginLeft:"10px", width:"180px"}}>{this.state.away_Team.fullName}</div>
                                    </th>
                                </tr>
                            </table>
                        </div>

                        <div style={{marginLeft: "10px", marginTop: "10px"}}>Events:</div>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Athlete</th>
                                    <th>Team</th>
                                    <th>Time</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.matchEvents.length === 0 ?
                                <tr align="center">
                                    <td colSpan="4">No Events Available</td>
                                </tr>:
                                this.state.matchEvents.map(
                                    matchEvent =>
                                    <tr key = {matchEvent.id}>
                                        <td>{matchEvent.id.athleteId}</td>
                                        <td>{matchEvent.id.teamId}</td>
                                        <td>{matchEvent.id.time}</td>
                                        <td>{matchEvent.eventType}</td>
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
                                <td>{this.state.amFootballStats.hTouchdowns}</td>
                                <td>Touchdowns</td>
                                <td>{this.state.amFootballStats.aTouchdowns}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hFieldGoals}</td>
                                <td>Field goals</td>
                                <td>{this.state.amFootballStats.aFieldGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hTwoPoint}</td>
                                <td>Two-point attempt</td>
                                <td>{this.state.amFootballStats.aTwoPoint}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hTotalYards}</td>
                                <td>Total yards</td>
                                <td>{this.state.amFootballStats.aTotalYards}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hPassingYards}</td>
                                <td>Passing yards</td>
                                <td>{this.state.amFootballStats.aPassingYards}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hRushingYards}</td>
                                <td>Rushing yards</td>
                                <td>{this.state.amFootballStats.aRushingYards}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hAvgYrdsPerPlay}</td>
                                <td>Average yards&#47;play</td>
                                <td>{this.state.amFootballStats.aAvgYrdsPerPlay}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hFumbles}</td>
                                <td>Fumbles</td>
                                <td>{this.state.amFootballStats.aFumbles}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hInterceptions}</td>
                                <td>Interceptions</td>
                                <td>{this.state.amFootballStats.aInterceptions}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hPunts}</td>
                                <td>Punts</td>
                                <td>{this.state.amFootballStats.aPunts}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hTimeOfPossession}</td>
                                <td>Time of possession</td>
                                <td>{this.state.amFootballStats.aTimeOfPossession}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hPenalties}</td>
                                <td>Penalties</td>
                                <td>{this.state.amFootballStats.aPenalties}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hYardsPenalized}</td>
                                <td>Yards penalized</td>
                                <td>{this.state.amFootballStats.aYardsPenalized}</td>
                            </tr>
                        </table>

                        <div style={{marginLeft:"10px"}}>
                            <div className="row">
                                <div style={{marginLeft: "10px", marginTop: "20px"}}>{this.state.playedmatch.date}</div>
                            </div>

                            <div className="row">
                                <label style={{marginLeft: "10px"}}>Played in the </label>
                                <div style={{marginLeft: "5px"}}>{this.state.playedmatch.place}</div>
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