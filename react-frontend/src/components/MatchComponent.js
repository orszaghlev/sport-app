import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from "../services/UserService";

class MatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: [],
            seasons: [],
            competitions: [],
            teams: []
        }
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
        UserService.getUserBoard().then(
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
                <h2 className="text-center">Matches</h2>
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
                                            <button onClick={ () => this.viewMatch(match.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Teams</h2>
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
                                        <td>{team.id}</td>
                                        <td>{team.fullName}</td>
                                        <td>{team.shortName}</td>
                                        <td>{team.foundingDate}</td>
                                        <td>{team.teamValue}</td>
                                        <td>{team.valueCurrency}</td>
                                        <td>{<img src={team.imageLink} alt="Team" width="100px" height="100px"/>}</td>
                                        <td>{team.homePlace}</td>
                                        <td>
                                            <button onClick={ () => this.viewTeam(team.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Seasons</h2>
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
                                        <td width="10%">{season.id}</td>
                                        <td width="18%">{season.teamId}</td>
                                        <td width="18%">{season.competitionId}</td>
                                        <td width="22.5%">{season.started}</td>
                                        <td width="22.5%">{season.finished}</td>
                                        <td>
                                            <button onClick={ () => this.viewSeason(season.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Competitions</h2>
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
                                        <td width="13%">{competition.id}</td>
                                        <td width="19.5%">{competition.region}</td>
                                        <td width="19.5%">{competition.sportType}</td>
                                        <td width="19.5%">{competition.name}</td>
                                        <td width="19.5%">{<img src={competition.logoLink} alt="Logo" width="100px" height="100px"/>}</td>
                                        <td>
                                            <button onClick={ () => this.viewCompetition(competition.id)} className="btn btn-info">View</button>
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