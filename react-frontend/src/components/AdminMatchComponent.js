import React, { Component } from 'react';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import MatchService from '../services/MatchService';
import UserService from '../services/UserService';

class AdminMatchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            matches: [],
            currentPage: 1,
            matchesPerPage: 5
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
        if (this.state.currentPage < Math.ceil(this.state.matches.length / this.state.matchesPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.matches.length / this.state.matchesPerPage)
            });
        }
    }

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.matches.length / this.state.matchesPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    render() {
        const {matches, currentPage, matchesPerPage} = this.state;
        const lastIndex = currentPage * matchesPerPage;
        const firstIndex = lastIndex - matchesPerPage;
        const currentMatches = matches.slice(firstIndex, lastIndex);
        const totalPages = matches.length / matchesPerPage;
        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };

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
                            {matches.length === 0 ?
                                <tr align="center">
                                    <td colSpan="9">No Matches Available</td>
                                </tr>:
                                currentMatches.map(
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
                            <FormControl style={pageNumCss} className={"bg-white"} name="currentPage" value={currentPage}
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

export default AdminMatchComponent;