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
        this.addTeam = this.addTeam.bind(this);
        this.addSeason = this.addSeason.bind(this);
        this.addCompetition = this.addCompetition.bind(this);
        this.editMatch = this.editMatch.bind(this);
        this.editTeam = this.editTeam.bind(this);
        this.editSeason = this.editSeason.bind(this);
        this.editCompetition = this.editCompetition.bind(this);
        this.deleteMatch = this.deleteMatch.bind(this);
        this.deleteTeam = this.deleteTeam.bind(this);
        this.deleteSeason = this.deleteSeason.bind(this);
        this.deleteCompetition = this.deleteCompetition.bind(this);
    }
 
    addMatch() {
        this.props.history.push(`/add-match/_add`);
    }

    addTeam() {
        this.props.history.push(`/add-team/_add`);
    }

    addSeason() {
        this.props.history.push(`/add-season/_add`);
    }

    addCompetition() {
        this.props.history.push(`/add-competition/_add`);
    }
    
    editMatch(id) {
        this.props.history.push(`/add-match/${id}`);
    }

    editTeam(id) {
        this.props.history.push(`/add-team/${id}`);
    }

    editSeason(id) {
        this.props.history.push(`/add-season/${id}`);
    }

    editCompetition(id) {
        this.props.history.push(`/add-competition/${id}`);
    }

    deleteMatch(id) {
        MatchService.deleteMatch(id).then(res => {
            this.setState({matches: this.state.matches.filter(match => match.id !== id)});
        });
    }

    deleteTeam(id) {
        MatchService.deleteTeam(id).then(res => {
            this.setState({teams: this.state.teams.filter(team => team.id !== id)});
        });
    }

    deleteSeason(id) {
        MatchService.deleteSeason(id).then(res => {
            this.setState({seasons: this.state.seasons.filter(season => season.id !== id)});
        });
    }

    deleteCompetition(id) {
        MatchService.deleteCompetition(id).then(res => {
            this.setState({competitions: this.state.competitions.filter(competition => competition.id !== id)});
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

        MatchService.getTeams().then((res) => {
            this.setState({teams: res.data});
        });

        MatchService.getSeasons().then((res) => {
            this.setState({seasons: res.data});
        });

        MatchService.getCompetitions().then((res) => {
            this.setState({competitions: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Matches</h2>
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
                                        <td className="align-middle" width="8%">{match.id}</td>
                                        <td className="align-middle" width="8%">{match.seasonId}</td>
                                        <td className="align-middle" width="8%">{match.homeTeam}</td>
                                        <td className="align-middle" width="8%">{match.awayTeam}</td>
                                        <td className="align-middle" width="8%">{match.homeScore}</td>
                                        <td className="align-middle" width="8%">{match.awayScore}</td>
                                        <td className="align-middle">{match.place}</td>
                                        <td className="align-middle">{match.date}</td>
                                        <td className="align-middle">
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
                <h2 className="text-center">Teams</h2>
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
                                <th>Value</th>
                                <th>Currency</th>
                                <th>Image</th>
                                <th>Home Place</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.teams.map(
                                    team => 
                                    <tr key = {team.id}>
                                        <td className="align-middle">{team.id}</td>
                                        <td className="align-middle">{team.fullName}</td>
                                        <td className="align-middle" width="8%">{team.shortName}</td>
                                        <td className="align-middle">{team.foundingDate}</td>
                                        <td className="align-middle">{team.teamValue}</td>
                                        <td className="align-middle" width="5%">{team.valueCurrency}</td>
                                        <td className="align-middle">{<img src={team.imageLink} alt="Team" width="100px" height="100px"/>}</td>
                                        <td className="align-middle">{team.homePlace}</td>
                                        <td className="align-middle">
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
                <h2 className="text-center">Seasons</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addSeason}>Add Season</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Season ID</th>
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
                                        <td className="align-middle" width="10%">{season.id}</td>
                                        <td className="align-middle" width="21.5%">{season.competitionId}</td>
                                        <td className="align-middle" width="22.5%">{season.started}</td>
                                        <td className="align-middle" width="22.5%">{season.finished}</td>
                                        <td className="align-middle">
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
                <h2 className="text-center">Competitions</h2>
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
                                <th>Logo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.competitions.map(
                                    competition => 
                                    <tr key = {competition.id}>
                                        <td className="align-middle" width="13%">{competition.id}</td>
                                        <td className="align-middle" width="16%">{competition.region}</td>
                                        <td className="align-middle" width="16%">{competition.sportType}</td>
                                        <td className="align-middle" width="16%">{competition.name}</td>
                                        <td className="align-middle" width="16%">{<img src={competition.logoLink} alt="Logo" width="100px" height="100px"/>}</td>
                                        <td className="align-middle">
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