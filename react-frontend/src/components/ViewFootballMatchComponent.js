import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewFootballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            home_Team: {},
            away_Team: {},
            season: {},
            comp: {},
            footballStats: {},
            matchEvents: []
        }
    }

    componentDidMount() {
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
                                <td>{this.state.footballStats.hAttempts}</td>
                                <td>Attempts</td>
                                <td>{this.state.footballStats.aAttempts}</td>
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
                                <td>{this.state.footballStats.hPossession}%</td>
                                <td>Possession</td>
                                <td>{this.state.footballStats.aPossession}%</td>
                            </tr>
                            <tr>
                                <td>{this.state.footballStats.hPassingAccuracy}%</td>
                                <td>Passing accuracy</td>
                                <td>{this.state.footballStats.aPassingAccuracy}%</td>
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