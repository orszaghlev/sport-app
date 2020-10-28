import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class MatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: []
        }
    }
    
    componentDidMount() {
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.matches.map(
                                    match => 
                                    <tr key = {match.id}>
                                        <td>{match.id}</td>
                                        <td>{match.season_id}</td>
                                        <td>{match.home_team}</td>
                                        <td>{match.away_team}</td>
                                        <td>{match.home_score}</td>
                                        <td>{match.away_score}</td>
                                        <td>{match.place}</td>
                                        <td>{match.date}</td>
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