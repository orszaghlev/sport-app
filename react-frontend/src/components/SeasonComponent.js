import React, { Component } from 'react';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import MatchService from '../services/MatchService';
import UserService from "../services/UserService";
import './Style.css';

class SeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seasons: [],
            currentPage: 1,
            seasonsPerPage: 5
        }
    }

    viewSeason(id) {
        this.props.history.push(`/view-season/${id}`);
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

        MatchService.getSeasons().then((res) => {
            this.setState({seasons: res.data});
        });
    }

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    previousPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.seasons.length / this.state.seasonsPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.seasons.length / this.state.seasonsPerPage)
            });
        }
    }

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.seasons.length / this.state.seasonsPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    render() {
        const {seasons, currentPage, seasonsPerPage} = this.state;
        const lastIndex = currentPage * seasonsPerPage;
        const firstIndex = lastIndex - seasonsPerPage;
        const currentSeasons = seasons.slice(firstIndex, lastIndex);
        const totalPages = seasons.length / seasonsPerPage;

        return (
            <div>
                <h2 className="text-center">Seasons</h2>
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
                            {seasons.length === 0 ?
                                <tr align="center">
                                    <td colSpan="5">No Seasons Available</td>
                                </tr>:
                                currentSeasons.map(
                                    season => 
                                    <tr key = {season.id}>
                                        <td className="align-middle" width="10%">{season.id}</td>
                                        <td className="align-middle" width="23.5%">{season.competitionId}</td>
                                        <td className="align-middle" width="29.5%">{season.started}</td>
                                        <td className="align-middle" width="29.5%">{season.finished}</td>
                                        <td className="align-middle">
                                            <button onClick={ () => this.viewSeason(season.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <Card.Footer>
                    <div style={{"margin-left": "auto"}}>
                        Showing Page {currentPage} of {Math.ceil(totalPages)}
                    </div>
                    <div style={{"margin-right": "0"}}>
                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={this.firstPage}>
                                    <FontAwesomeIcon icon={faFastBackward}/> First
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={this.previousPage}>
                                    <FontAwesomeIcon icon={faStepBackward}/> Previous
                                </Button >
                            </InputGroup.Prepend>
                            <FormControl className={"page-num bg-white"} name="currentPage" value={currentPage}
                                    onChange={this.changePage}/>
                            <InputGroup.Append>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={this.nextPage}>
                                    <FontAwesomeIcon icon={faStepForward}/> Next
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={this.lastPage}>
                                    <FontAwesomeIcon icon={faFastForward}/> Last
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    </Card.Footer>
                </div>
            </div>
        );
    }
}

export default SeasonComponent;