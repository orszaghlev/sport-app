import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";

class ViewBasketballMatchComponent extends Component {
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
            basketballStats: {},
            matchEvents: [],
            sortToggle: true
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

        MatchService.getBasketballStatsById(this.state.id).then(res => {
            this.setState({basketballStats: res.data});
        })
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
    }

    return() {
        this.props.history.push(`/view-season/${this.state.season.id}`);
    }

    matches() {
        this.props.history.push(`/matches`);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {matchEvents} = this.state;

        matchEvents.sort((a, b) => {
            const isReversed = (this.state.sortToggle === true) ? 1 : -1;
            return (isReversed * a.id.time.localeCompare(b.id.time));
        });

        return (
            <div>
                <br></br>
                <div className="card col-md-10 offset-md-1">
                <div className="card-body">


                        <div className="text-center" style={{backgroundColor:"#33cc33", color:"#ffffff", height:"140px", horizontalAlign:"center", verticalAlign:"center"}}>
                            <div className="row">
                                <div style={{marginLeft: "25px"}}>{this.state.comp.sportType}</div>
                                <label style={{marginLeft: "5px"}}>-</label>
                                <div style={{marginLeft: "5px"}}>{<img src={this.state.comp.logoLink} alt="Competition_logo" height="18px" />}</div>
                                <div style={{marginLeft: "5px", fontWeight:"bold"}}>{this.state.comp.name}</div>
                            </div>
                            <div style={{marginLeft:"auto", marginRight:"auto",display:"inline-block"}}>
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
                        </div>


                    <div style={{float:"left"}}>
                        <table className="text-center align-middle table table-striped" style={{marginLeft: "0px", marginTop:"30px", marginBottom:"10px", fontSize:"16px", width:"403px"}}>
                            <tr style={{backgroundColor:"#33cc33", color:"#ffffff"}}>
                                <th style={{width:"61px"}}>{this.state.home_Team.shortName}</th>
                                <th style={{width:"161px"}}>STATS</th>
                                <th style={{width:"61px"}}>{this.state.away_Team.shortName}</th>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hFreeThrows}</td>
                                <td>Free throws</td>
                                <td>{this.state.basketballStats.aFreeThrows}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hTwoPointers}</td>
                                <td>Two pointers</td>
                                <td>{this.state.basketballStats.aTwoPointers}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hThreePointers}</td>
                                <td>Three pointers</td>
                                <td>{this.state.basketballStats.aThreePointers}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hFieldGoals}</td>
                                <td>Field goals</td>
                                <td>{this.state.basketballStats.aFieldGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hRebounds}</td>
                                <td>Rebounds</td>
                                <td>{this.state.basketballStats.aRebounds}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hTurnovers}</td>
                                <td>Turnovers</td>
                                <td>{this.state.basketballStats.aTurnovers}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hSteals}</td>
                                <td>Steals</td>
                                <td>{this.state.basketballStats.aSteals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hBlocks}</td>
                                <td>Blocks</td>
                                <td>{this.state.basketballStats.aBlocks}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hFouls}</td>
                                <td>Fouls</td>
                                <td>{this.state.basketballStats.aFouls}</td>
                            </tr>
                            <tr>
                                <td>{this.state.basketballStats.hTimeouts}</td>
                                <td>Timeouts</td>
                                <td>{this.state.basketballStats.aTimeouts}</td>
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
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>&#60;&#60; Go to season</button>
                        </div>
                        <div className="row" style={{marginLeft:"10px", marginBottom:"10px"}}>
                            <button className="btn btn-info" onClick={this.matches.bind(this)}>&#60;&#60; Show all matches</button>
                        </div>
                    </div>

                    <div style={{float:"left", marginLeft: "45px", marginTop: "30px"}}>
                        <table className="table table-striped" style={{width:"403px"}}>
                            <thead>
                                <tr style={{ backgroundColor:"#33cc33", color:"#ffffff", fontSize:"16px", fontWeight:"bold"}}>
                                    <th onClick={this.sortData} className="text-center align-middle" style={{width:"0px"}}></th>
                                    <th className="text-left align-middle" style={{paddingLeft:"143px"}}>EVENTS</th>
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
                                                <td className="text-center align-middle">{matchEvent.id.time}'</td>
                                                <td className="text-left align-middle"><div style={{fontWeight:"bold", float:"left"}}>{matchEvent.id.eventTypeName}</div>: {matchEvent.id.athleteName} ({matchEvent.id.teamShortName})</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBasketballMatchComponent;