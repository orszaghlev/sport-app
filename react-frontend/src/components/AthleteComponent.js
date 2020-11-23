import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward, faTimes} from '@fortawesome/free-solid-svg-icons';
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";
import './Style.css';

class AthleteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            athletes: [],
            currentPage: 1,
            athletesPerPage: 5,
            search: '',
            sortToggle: true
        }
    }

    viewAthlete(id) {
        this.props.history.push(`/view-athlete/${id}`);
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getAthletes().then((res) => {
            this.setState({athletes: res.data});
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
        if (this.state.currentPage < Math.ceil(this.state.athletes.length / this.state.athletesPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.athletes.length / this.state.athletesPerPage)
            });
        }
    }

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.athletes.length / this.state.athletesPerPage)) {
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
        MatchService.getAthletes().then((res) => {
            this.setState({currentAthletes: res.data});
        });
    }

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {athletes, currentPage, athletesPerPage, search} = this.state;
        const lastIndex = currentPage * athletesPerPage;
        const firstIndex = lastIndex - athletesPerPage;

        athletes.sort((a, b) => {
            const isReversed = (this.state.sortToggle === true) ? 1 : -1;
            return (isReversed * a.id.localeCompare(b.id));
        });

        const filteredAthletes = athletes.filter( athlete => {
            return (athlete.id.indexOf(search) !== -1) 
            || (athlete.name.toLowerCase().indexOf(search.toLowerCase() ) !== -1)
            || (athlete.dateOfBirth.indexOf(search) !== -1)
            || (athlete.valueCurrency.toLowerCase().indexOf(search.toLowerCase() ) !== -1)
            || (athlete.position.toLowerCase().indexOf(search.toLowerCase() ) !== -1)
            || (athlete.nationality.toLowerCase().indexOf(search.toLowerCase() ) !== -1);
        })
        
        const currentAthletes = filteredAthletes.slice(firstIndex, lastIndex);
        const totalPages = filteredAthletes.length / athletesPerPage;

        return (
            <div>
                <h2 className="text-center">Athletes</h2>
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
                                <th onClick={this.sortData}>Athlete ID<div className={this.state.sortToggle ? "arrow arrow-up" : "arrow arrow-down"}></div></th>
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Value</th>
                                <th>Currency</th>
                                <th>Position</th>
                                <th>Nationality</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {athletes.length === 0 ?
                                <tr align="center">
                                    <td colSpan="8">No Athletes Available</td>
                                </tr>:
                                currentAthletes.map(
                                    athlete => 
                                    <tr key = {athlete.id}>
                                        <td className="align-middle">{athlete.id}</td>
                                        <td className="align-middle">{athlete.name}</td>
                                        <td className="align-middle">{athlete.dateOfBirth}</td>
                                        <td className="align-middle">{athlete.value}</td>
                                        <td className="align-middle">{athlete.valueCurrency}</td>
                                        <td className="align-middle">{athlete.position}</td>
                                        <td className="align-middle">{athlete.nationality}</td>
                                        <td className="align-middle">
                                            <button onClick={ () => this.viewAthlete(athlete.id)} className="btn btn-info">View</button>
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

export default AthleteComponent;