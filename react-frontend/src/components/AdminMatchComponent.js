import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from '../services/UserService';

class MatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: [],
            seasons: [],
            competitions: [],
            teams: []
        }
        this.addMatch = this.addMatch.bind(this);
        this.editMatch = this.editMatch.bind(this);
        this.deleteMatch = this.deleteMatch.bind(this);
    }
 
    addMatch() {
        this.props.history.push(`/add-match/_add`);
    }
    
    editMatch(id) {
        this.props.history.push(`/add-match/${id}`);
    }

    deleteMatch(id) {
        MatchService.deleteMatch(id).then(res => {
            this.setState({matches: this.state.matches.filter(match => match.id !== id)});
        });
    }

    viewMatch(id) {
        this.props.history.push(`/view-match/${id}`);
    }

    viewTeam(id) {
        this.props.history.push(`/view-team/${id}`);
    }

    viewSeason(id) {
        this.props.history.push(`/view-season/${id}`);
    }

    viewCompetition(id) {
        this.props.history.push(`/view-competition/${id}`);
    }

    componentDidMount() {
        UserService.getAdminBoard().then (
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );

        MatchService.getMatches().then((res) => {
            this.setState({matches: res.data});
        });

        MatchService.getSeasons().then((res) => {
            this.setState({seasons: res.data});
        });

        MatchService.getCompetitions().then((res) => {
            this.setState({competitions: res.data});
        });

        MatchService.getTeams().then((res) => {
            this.setState({teams: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Matches (as Admin)</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addMatch}>Add Match</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Match ID</th>
                                <th>Season ID</th>
                                <th>Home Team</th>
                                <th>Away Team</th>
                                <th>Home Score</th>
                                <th>Away Score</th>
                                <th>Place</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.matches.map(
                                    match => 
                                    <tr key = {match.id}>
                                        <td>{match.id}</td>
                                        <td>{match.seasonId}</td>
                                        <td>{match.homeTeam}</td>
                                        <td>{match.awayTeam}</td>
                                        <td>{match.homeScore}</td>
                                        <td>{match.awayScore}</td>
                                        <td>{match.place}</td>
                                        <td>{match.date}</td>
                                        <td>
                                            <button onClick={ () => this.editMatch(match.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMatch(match.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewMatch(match.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Teams (as Admin)</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addTeam}>Add Team</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Team ID</th>
                                <th>Full Name</th>
                                <th>Short Name</th>
                                <th>Founding Date</th>
                                <th>Team Value</th>
                                <th>Value Currency</th>
                                <th>Image Link</th>
                                <th>Home Place</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.teams.map(
                                    team => 
                                    <tr key = {team.id}>
                                        <td>{team.id}</td>
                                        <td>{team.fullName}</td>
                                        <td>{team.shortName}</td>
                                        <td>{team.foundingDate}</td>
                                        <td>{team.teamValue}</td>
                                        <td>{team.valueCurrency}</td>
                                        <td>{team.imageLink}</td>
                                        <td>{team.homePlace}</td>
                                        <td>
                                            <button onClick={ () => this.editTeam(team.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTeam(team.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginTop: "10px"}} onClick={ () => this.viewTeam(team.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Seasons (as Admin)</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSeason}>Add Season</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Season ID</th>
                                <th>Team ID</th>
                                <th>Competition ID</th>
                                <th>Started</th>
                                <th>Finished</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.seasons.map(
                                    season => 
                                    <tr key = {season.id}>
                                        <td>{season.id}</td>
                                        <td>{season.teamId}</td>
                                        <td>{season.competitionId}</td>
                                        <td>{season.started}</td>
                                        <td>{season.finished}</td>
                                        <td>
                                            <button onClick={ () => this.editSeason(season.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSeason(season.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewSeason(season.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Competitions (as Admin)</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCompetition}>Add Competition</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Competition ID</th>
                                <th>Region</th>
                                <th>Sport Type</th>
                                <th>Name</th>
                                <th>Logo Link</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.competitions.map(
                                    competition => 
                                    <tr key = {competition.id}>
                                        <td>{competition.id}</td>
                                        <td>{competition.region}</td>
                                        <td>{competition.sportType}</td>
                                        <td>{competition.name}</td>
                                        <td>{competition.logoLink}</td>
                                        <td>
                                            <button onClick={ () => this.editCompetition(competition.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompetition(competition.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompetition(competition.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MatchComponent;