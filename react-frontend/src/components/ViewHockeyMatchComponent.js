import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewHockeyMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            homeTeam: {},
            awayTeam: {},
            hockeyStats: {}
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
        MatchService.getHockeyStatsById(this.state.id).then(res => {
            this.setState({hockeyStats: res.data});
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
                            <label>Shots:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hShots}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aShots}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Power Play Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hGoalsInPowerplay}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aGoalsInPowerplay}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Shorthanded Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hShorthandedGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aShorthandedGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Faceoffs Won:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hFaceoffsWon}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aFaceoffsWon}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Blocked:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hBlocked}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aBlocked}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Takeaways:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hTakeaways}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aTakeaways}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Giveaways:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hGiveaways}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aGiveaways}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Penalty Minutes:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.hPenaltyMinutes}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.hockeyStats.aPenaltyMinutes}</div>
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

export default ViewHockeyMatchComponent;