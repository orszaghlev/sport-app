import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class CreateMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            seasonId: '',
            homeTeam: '',
            awayTeam: '',
            homeScore: '',
            awayScore: '',
            place: '',
            date: ''
        }

        this.changeSeasonIdHandler = this.changeSeasonIdHandler.bind(this);
        this.changeHomeTeamHandler = this.changeHomeTeamHandler.bind(this);
        this.changeAwayTeamHandler = this.changeAwayTeamHandler.bind(this);
        this.changeHomeScoreHandler = this.changeHomeScoreHandler.bind(this);
        this.changeAwayScoreHandler = this.changeAwayScoreHandler.bind(this);
        this.changePlaceHandler = this.changePlaceHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveOrUpdateMatch = this.saveOrUpdateMatch.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return
        } else {
            MatchService.getMatchById(this.state.id).then( (res) => {
                let match = res.data;
                this.setState({season_id: match.season_id,
                    homeTeam: match.homeTeam,
                    awayTeam: match.awayTeam,
                    homeScore: match.homeScore,
                    awayScore: match.awayScore,
                    place: match.place,
                    date: match.date
                });
            });
        }
    }

    saveOrUpdateMatch = (m) => {
        m.preventDefault();
        let match = {seasonId: this.state.seasonId, homeTeam: this.state.homeTeam, awayTeam: this.state.awayTeam, homeScore: this.state.homeScore, awayScore: this.state.awayScore, place: this.state.place, date: this.state.date};
        console.log('match => ' + JSON.stringify(match));

        if(this.state.id === '_add') {
            MatchService.createMatch(match).then(res => {
                this.props.history.push('/matches-admin');
            });
        } else {
            MatchService.updateMatch(match, this.state.id).then(res => {
                this.props.history.push('/matches-admin');
            })
        }
    }

    changeSeasonIdHandler = (event) => {
        this.setState({seasonId: event.target.value});
    }

    changeHomeTeamHandler = (event) => {
        this.setState({homeTeam: event.target.value});
    }

    changeAwayTeamHandler = (event) => {
        this.setState({awayTeam: event.target.value});
    }

    changeHomeScoreHandler = (event) => {
        this.setState({homeScore: event.target.value});
    }

    changeAwayScoreHandler = (event) => {
        this.setState({awayScore: event.target.value});
    }

    changePlaceHandler = (event) => {
        this.setState({place: event.target.value});
    }

    changeDateHandler = (event) => {
        this.setState({date: event.target.value});
    }

    cancel() {
        this.props.history.push('/matches-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Match</h3>
        } else {
            return <h3 className="text-center">Update Match</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()    
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Season ID:</label>
                                        <input placeholder="Season ID" name="seasonId" className="form-control"
                                            value={this.state.seasonId} onChange={this.changeSeasonIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Home Team:</label>
                                        <input placeholder="Home Team" name="homeTeam" className="form-control"
                                            value={this.state.homeTeam} onChange={this.changeHomeTeamHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Away Team:</label>
                                        <input placeholder="Away Team" name="awayTeam" className="form-control"
                                            value={this.state.awayTeam} onChange={this.changeAwayTeamHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Home Score:</label>
                                        <input placeholder="Home Score" name="homeScore" className="form-control"
                                            value={this.state.homeScore} onChange={this.changeHomeScoreHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Away Score:</label>
                                        <input placeholder="Away Score" name="awayScore" className="form-control"
                                            value={this.state.awayScore} onChange={this.changeAwayScoreHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Place:</label>
                                        <input placeholder="Place" name="place" className="form-control"
                                            value={this.state.place} onChange={this.changePlaceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Date:</label>
                                        <input placeholder="Date" name="date" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateMatch}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMatchComponent;