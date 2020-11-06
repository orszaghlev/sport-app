import React, { Component } from 'react';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward} from '@fortawesome/free-solid-svg-icons';
import MatchService from '../services/MatchService';
import UserService from '../services/UserService';

class AdminCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competitions: [],
            currentPage: 1,
            competitionsPerPage: 5
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
        if (this.state.currentPage < Math.ceil(this.state.competitions.length / this.state.competitionsPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.competitions.length / this.state.competitionsPerPage)
            });
        }
    }

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.competitions.length / this.state.competitionsPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    render() {
        const {competitions, currentPage, competitionsPerPage} = this.state;
        const lastIndex = currentPage * competitionsPerPage;
        const firstIndex = lastIndex - competitionsPerPage;
        const currentCompetitions = competitions.slice(firstIndex, lastIndex);
        const totalPages = competitions.length / competitionsPerPage;
        const pageNumCss = {
            width: "45px",
            border: "1px solid #17A2B8",
            color: "#17A2B8",
            textAlign: "center",
            fontWeight: "bold"
        };

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
                            {competitions.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">No Competitions Available</td>
                                </tr>:
                                currentCompetitions.map(
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

export default AdminCompetitionComponent;