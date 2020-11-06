import React, { Component } from 'react';
import MatchService from '../services/MatchService';
import UserService from '../services/UserService';

class AdminSeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seasons: []
        }
        this.addSeason = this.addSeason.bind(this);
        this.editSeason = this.editSeason.bind(this);
        this.deleteSeason = this.deleteSeason.bind(this);
    }

    addSeason() {
        this.props.history.push(`/add-season/_add`);
    }

    editSeason(id) {
        this.props.history.push(`/add-season/${id}`);
    }

    deleteSeason(id) {
        MatchService.deleteSeason(id).then(res => {
            this.setState({seasons: this.state.seasons.filter(season => season.id !== id)});
        });
    }

    viewSeason(id) {
        this.props.history.push(`/view-season/${id}`);
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

        MatchService.getSeasons().then((res) => {
            this.setState({seasons: res.data});
        });
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default AdminSeasonComponent;