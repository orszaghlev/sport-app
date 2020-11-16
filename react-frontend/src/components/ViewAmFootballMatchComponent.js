import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewAmFootballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            amFootballStats: {},

        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
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
                                        <div className="text-center" style={{marginRight:"0px"}}> {this.state.match.homeTeam}</div>

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
                                <td style={{width:"161px"}}>{this.state.amFootballStats.hTouchdowns}</td>
                                <td style={{width:"161px"}}>Touchdowns</td>
                                <td style={{width:"161px"}}>{this.state.amFootballStats.aTouchdowns}</td>
                            </tr>
                            <tr>
                                <td>{this.state.amFootballStats.hExtraPoint}</td>
                                <td>Extra points scored</td>
                                <td>{this.state.amFootballStats.aExtraPoint}</td>
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