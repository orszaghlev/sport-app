import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFastBackward, faFastForward, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

class ViewSeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            season: {},
            competition: {},
            start: "",
            finish:"",
            name:"",
            matches: [],
            currentPage: 1,
            matchesPerPage: 10,
            search: ''
        }
    }

    viewMatch(id) {
        if (id.substring(0, 2) === "41") {
            this.props.history.push(`/view-football-match/${id}`);
        }
        else if (id.substring(0, 2) === "42") {
            this.props.history.push(`/view-amfootball-match/${id}`);
        }
        else if (id.substring(0, 2) === "43") {
            this.props.history.push(`/view-basketball-match/${id}`);
        }
        else if (id.substring(0, 2) === "44") {
            this.props.history.push(`/view-handball-match/${id}`);
        }
        else if (id.substring(0, 2) === "45") {
            this.props.history.push(`/view-hockey-match/${id}`);
        }
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getSeasonById(this.state.id).then(res => {
            this.setState({season: res.data});
            MatchService.getCompetitionById(this.state.season.competitionId).then(res => {
                this.setState({competition: res.data});
                this.setState({start: this.state.season.started.substring(2,4)});
                this.setState({finish: this.state.season.finished.substring(2,4)});
                if (this.state.start == this.state.finish){
                    this.setState({name: this.state.season.started.substring(0,4)});
                }
                else {
                    this.setState({name: this.state.start.concat("/").concat(this.state.finish) });
                }
                this.setState({search: this.state.id});
            })
        })
        MatchService.getMatches().then((res) => {
            this.setState({matches: res.data});
        });
    }

    return() {
        this.props.history.push('/competitions');
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

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {matches, currentPage, matchesPerPage, search} = this.state;
        const lastIndex = currentPage * matchesPerPage;
        const firstIndex = lastIndex - matchesPerPage;

        matches.sort((a, b) => {
            const isReversed = (this.state.sortToggle === true) ? 1 : -1;
            return (isReversed * a.date.localeCompare(b.date));
        });

        const filteredMatches = matches.filter( match => {
            return (match.seasonId.indexOf(search) !== -1);
        })

        const currentMatches = filteredMatches.slice(firstIndex, lastIndex);
        const totalPages = filteredMatches.length / matchesPerPage;

        return (
            <div>

                <div className="card col-md-10 offset-md-1">
                    <div className="card-body">

                        <div className="align-middle row" style={{fontSize:"22px", marginLeft:"7px"}}>
                            <div className="text-center align-middle" style={{marginLeft: "5px", width:"100px"}}>{<img src={this.state.competition.logoLink} alt="Competition_logo" height="100px" />}</div>
                            <div>
                                <div style={{marginLeft: "7px", marginTop:"20px"}}>{this.state.competition.name}</div>
                                <div style={{marginLeft: "7px"}}>Season {this.state.name}</div>
                            </div>
                        </div>
                        <hr style={{marginTop: "15px", marginLeft:"10px",  backgroundColor:"darkGrey", height:"0.2px"}}></hr>
                        <div className="row" style={{marginLeft:"10px"}}>
                            <label>This season starts on</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.started},</div>
                            <label style={{marginLeft: "5px"}}>and ends on</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.finished}.</div>
                        </div>

                        <div style={{marginTop:"40px"}}>Matches of this season:</div>
                        <div className="row">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="text-center align-middle" style={{width:"20%"}} onClick={this.sortData}>Date<div className={this.state.sortToggle ? "arrow arrow-up" : "arrow arrow-down"}></div></th>
                                        <th className="text-right align-middle">Home Team</th>
                                        <th className="text-center align-middle" style={{width:"100px"}}>Score</th>
                                        <th className="text-left align-middle">Away Team</th>
                                        <th className="text-center align-middle"></th>
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
                                                    <td className="text-center align-middle">{match.date}</td>
                                                    <td className="text-right align-middle" style={{fontWeight:"bold"}}>{match.homeName}</td>
                                                    <td className="text-center align-middle" style={{fontWeight:"bold"}}>{match.homeScore} - {match.awayScore}</td>
                                                    <td className="text-left align-middle" style={{fontWeight:"bold"}}>{match.awayName}</td>
                                                    <td className="text-center align-middle">
                                                        <button onClick={ () => this.viewMatch(match.id)} className="btn btn-info">View details! &#62;&#62;</button>
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
                                <div style={{"margin-right": "0", marginTop:"5px"}}>
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


                        <div className="row">
                            <button className="btn btn-danger" style={{marginLeft: "15px"}} onClick={this.return.bind(this)}>&#60;&#60; Return</button>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSeasonComponent;