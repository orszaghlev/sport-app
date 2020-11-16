import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewHockeyMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            hockeyStats: {}
        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
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
                                <td style={{width:"161px"}}>{this.state.hockeyStats.hShots}</td>
                                <td style={{width:"161px"}}>Shots</td>
                                <td style={{width:"161px"}}>{this.state.hockeyStats.aShots}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hGoalsInPowerplay}</td>
                                <td>Power play goals</td>
                                <td>{this.state.hockeyStats.aGoalsInPowerplay}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hShorthandedGoals}</td>
                                <td>Shorthanded goals</td>
                                <td>{this.state.hockeyStats.aShorthandedGoals}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hFaceoffsWon}</td>
                                <td>Faceoffs won</td>
                                <td>{this.state.hockeyStats.aFaceoffsWon}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hBlocked}</td>
                                <td>Blocked</td>
                                <td>{this.state.hockeyStats.aBlocked}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hTakeaways}</td>
                                <td>Takeaways</td>
                                <td>{this.state.hockeyStats.aTakeaways}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hGiveaways}</td>
                                <td>Giveaways</td>
                                <td>{this.state.hockeyStats.aGiveaways}</td>
                            </tr>
                            <tr>
                                <td>{this.state.hockeyStats.hPenaltyMinutes}</td>
                                <td>Penalty minutes</td>
                                <td>{this.state.hockeyStats.aPenaltyMinutes}</td>
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

export default ViewHockeyMatchComponent;