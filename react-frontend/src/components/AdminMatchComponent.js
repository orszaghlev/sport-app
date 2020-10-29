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
            </div>
        );
    }
}

export default MatchComponent;