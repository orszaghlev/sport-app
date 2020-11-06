import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from '../services/UserService';

class AdminCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competitions: []
        }
        this.addCompetition = this.addCompetition.bind(this);
        this.editCompetition = this.editCompetition.bind(this);
        this.deleteCompetition = this.deleteCompetition.bind(this);
    }

    addCompetition() {
        this.props.history.push(`/add-competition/_add`);
    }

    editCompetition(id) {
        this.props.history.push(`/add-competition/${id}`);
    }

    deleteCompetition(id) {
        MatchService.deleteCompetition(id).then(res => {
            this.setState({competitions: this.state.competitions.filter(competition => competition.id !== id)});
        });
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

        MatchService.getCompetitions().then((res) => {
            this.setState({competitions: res.data});
        });
    }

    render() {
        return (
            <div>
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

export default AdminCompetitionComponent;