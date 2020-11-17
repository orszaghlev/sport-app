import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewBasketballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            homeTeam: {},
            awayTeam: {},
            basketballStats: {},
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
        MatchService.getBasketballStatsById(this.state.id).then(res => {
            this.setState({basketballStats: res.data});
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
                            <label>Free Throws:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hFreeThrows}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aFreeThrows}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Two Pointers:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hTwoPointers}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aTwoPointers}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Three Pointers:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hThreePointers}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aThreePointers}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Field Goals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hFieldGoals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aFieldGoals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Rebounds:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hRebounds}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aRebounds}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Turnovers:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hTurnovers}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aTurnovers}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Steals:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hSteals}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aSteals}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Blocks:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hBlocks}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aBlocks}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Fouls:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hFouls}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aFouls}</div>
                        </div>
                        <div className="row" style={{marginLeft: "20px", marginTop: "10px"}}>
                            <label>Timeouts:</label>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.hTimeouts}</div>
                            <div style={{marginLeft: "10px"}}>{this.state.basketballStats.aTimeouts}</div>
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

export default ViewBasketballMatchComponent;