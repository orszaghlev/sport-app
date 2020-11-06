import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from "../services/UserService";

class CompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competitions: []
        }
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

        MatchService.getCompetitions().then((res) => {
            this.setState({competitions: res.data});
        });
    }

    render() {
        return (
            <div>
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
                                        <td className="align-middle" width="13%">{competition.id}</td>
                                        <td className="align-middle" width="14%">{competition.region}</td>
                                        <td className="align-middle" width="19%">{competition.sportType}</td>
                                        <td className="align-middle" width="28.5%">{competition.name}</td>
                                        <td className="align-middle" width="20.5%">{<img src={competition.logoLink} alt="Logo" width="100px" height="100px"/>}</td>
                                        <td className="align-middle">
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

export default CompetitionComponent;