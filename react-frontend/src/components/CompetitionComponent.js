import React, { Component } from 'react';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward, faTimes} from '@fortawesome/free-solid-svg-icons';
import MatchService from '../services/MatchService';
import UserService from "../services/UserService";
import './Style.css';

class CompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            competitions: [],
            currentPage: 1,
            competitionsPerPage: 5,
            search: '',
            sortToggle: true
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

    searchChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancelSearch = () => {
        this.setState({"search": ''})
        MatchService.getCompetitions().then((res) => {
            this.setState({currentCompetitions: res.data});
        });
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
    }

    render() {
        const {competitions, currentPage, competitionsPerPage, search} = this.state;
        const lastIndex = currentPage * competitionsPerPage;
        const firstIndex = lastIndex - competitionsPerPage;

        competitions.sort((a, b) => {
            const isReversed = (this.state.sortToggle === true) ? 1 : -1;
            return (isReversed * a.id.localeCompare(b.id));
        });

        const filteredCompetitions = competitions.filter( competition => {
            return (competition.id.indexOf(search) !== -1) 
            || (competition.region.toLowerCase().indexOf(search.toLowerCase() ) !== -1)
            || (competition.sportType.toLowerCase().indexOf(search.toLowerCase() ) !== -1)
            || (competition.name.toLowerCase().indexOf(search.toLowerCase() ) !== -1);
        })
        
        const currentCompetitions = filteredCompetitions.slice(firstIndex, lastIndex);
        const totalPages = filteredCompetitions.length / competitionsPerPage;

        return (
            <div>
                <h2 className="text-center">Competitions</h2>
                <div style={{"float": "right"}}>
                    <InputGroup size="sm">
                        <FormControl placeholder="Search" name="search" value={search} className={"info-border bg-white"}
                            onChange={this.searchChange}/>
                        <InputGroup.Append>
                            <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th onClick={this.sortData}>Competition ID<div className={this.state.sortToggle ? "arrow arrow-up" : "arrow arrow-down"}></div></th>
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
                                        <td className="align-middle" width="15%">{competition.id}</td>
                                        <td className="align-middle" width="14%">{competition.region}</td>
                                        <td className="align-middle" width="19%">{competition.sportType}</td>
                                        <td className="align-middle" width="28.5%">{competition.name}</td>
                                        <td className="align-middle" width="13%">{<img src={competition.logoLink} alt="Logo" width="100px" height="100px"/>}</td>
                                        <td className="align-middle">
                                            <button onClick={ () => this.viewCompetition(competition.id)} className="btn btn-info">View</button>
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
                                <Button type="button" variant="outline-info" disabled={currentPage === Math.ceil(totalPages) ? true : false}
                                    onClick={this.nextPage}>
                                    <FontAwesomeIcon icon={faStepForward}/> Next
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === Math.ceil(totalPages) ? true : false}
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

export default CompetitionComponent;