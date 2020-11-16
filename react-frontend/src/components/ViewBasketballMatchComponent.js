import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewBasketballMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            match: {},
            basketballStats: {}
        }
    }

    componentDidMount() {
        MatchService.getMatchById(this.state.id).then(res => {
            this.setState({match: res.data});
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
                                <td style={{width:"161px"}}>{this.state.basketballStats.hFreeThrows}</td>
                                <td style={{width:"161px"}}>Free throws</td>
                                <td style={{width:"161px"}}>{this.state.basketballStats.aFreeThrows}</td>
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
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>&#60;&#60; Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBasketballMatchComponent;