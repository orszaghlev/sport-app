import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from "../services/UserService";

class MatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: []
        }
    }
    
    viewMatch(id) {
        this.props.history.push(`/view-match/${id}`);
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
                                        <td className="align-middle">{match.id}</td>
                                        <td className="align-middle">{match.seasonId}</td>
                                        <td className="align-middle">{match.homeTeam}</td>
                                        <td className="align-middle">{match.awayTeam}</td>
                                        <td className="align-middle">{match.homeScore}</td>
                                        <td className="align-middle">{match.awayScore}</td>
                                        <td className="align-middle">{match.place}</td>
                                        <td className="align-middle">{match.date}</td>
                                        <td className="align-middle">
                                            <button onClick={ () => this.viewMatch(match.id)} className="btn btn-info">View</button>
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