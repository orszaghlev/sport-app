import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class CreateMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            season_id: '',
            home_team: '',
            away_team: '',
            home_score: '',
            away_score: '',
            place: '',
            date: ''
        }

        this.changeSeasonIdHandler = this.changeSeasonIdHandler,bind(this);
        this.changeHomeTeamHandler = this.changeHomeTeamHandler,bind(this);
        this.changeAwayTeamHandler = this.changeAwayTeamHandler,bind(this);
        this.changeHomeScoreHandler = this.changeHomeScoreHandler,bind(this);
        this.changeAwayScoreHandler = this.changeAwayScoreHandler,bind(this);
        this.changePlaceHandler = this.changePlaceHandler,bind(this);
        this.changeDateHandler = this.changeDateHandler,bind(this);
        this.saveMatch = this.saveMatch.bind(this);
    }

    saveMatch = (m) => {
        m.preventDefault();
        let match = {season_id: this.state.season_id, home_team: this.state.home_team, away_team: this.state.away_team, home_score: this.state.home_score, away_score: this.state.away_score, place: this.state.place, date: this.state.date};
        console.log('match => ' + JSON.stringify(match));

        MatchService.createMatch(match).then(res => {
            this.props.history.push('/api/auth/comp/matches');
        });
    }

    changeSeasonIdHandler = (event) => {
        this.setState({season_id: event.target.value});
    }

    changeHomeTeamHandler = (event) => {
        this.setState({home_team: event.target.value});
    }

    changeAwayTeamHandler = (event) => {
        this.setState({away_team: event.target.value});
    }

    changeHomeScoreHandler = (event) => {
        this.setState({home_score: event.target.value});
    }

    changeAwayScoreHandler = (event) => {
        this.setState({away_score: event.target.value});
    }

    changePlaceHandler = (event) => {
        this.setState({place: event.target.value});
    }

    changeDateHandler = (event) => {
        this.setState({date: event.target.value});
    }

    cancel() {
        this.props.history.push('/api/auth/comp/matches');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Match</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Season ID:</label>
                                        <input placeholder="Season ID" name="season_id" className="form-control"
                                            value={this.state.season_id} onChange={this.changeSeasonIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Home Team:</label>
                                        <input placeholder="Home Team" name="home_team" className="form-control"
                                            value={this.state.home_team} onChange={this.changeHomeTeamHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Away Team:</label>
                                        <input placeholder="Away Team" name="away_team" className="form-control"
                                            value={this.state.away_team} onChange={this.changeAwayTeamHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Home Score:</label>
                                        <input placeholder="Home Score" name="home_score" className="form-control"
                                            value={this.state.home_score} onChange={this.changeHomeScoreHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Away Score:</label>
                                        <input placeholder="Away Score" name="away_score" className="form-control"
                                            value={this.state.away_score} onChange={this.changeAwayScoreHandler}/>
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

                                    <button className="btn btn-success" onClick={this.saveMatch}>Save</button>
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