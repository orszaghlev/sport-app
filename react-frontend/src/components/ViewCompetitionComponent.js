import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from "../services/AuthService";
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFastBackward, faFastForward, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

class ViewCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {username: ""},
            competition: {},
            seasons: [],
            currentPage: 1,
            seasonsPerPage: 5,
            search: '',
            sortToggle: true
        }
    }

    viewSeason(id) {
        this.props.history.push(`/view-season/${id}`);
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})

        MatchService.getCompetitionById(this.state.id).then(res => {
            this.setState({competition: res.data});
            this.setState({search: this.state.id});
        })

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

    sortData = () => {
        this.setState(state => ({
            sortToggle: !state.sortToggle
        }));
    }

    return() {
        this.props.history.push('/competitions');
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {seasons, currentPage, seasonsPerPage, search} = this.state;
        const lastIndex = currentPage * seasonsPerPage;
        const firstIndex = lastIndex - seasonsPerPage;

        seasons.sort((a, b) => {
            const isReversed = (this.state.sortToggle === true) ? 1 : -1;
            return (isReversed * a.started.localeCompare(b.started));
        });

        const filteredSeasons = seasons.filter( season => {
            return (season.competitionId.indexOf(search) !== -1);
        })

        const currentSeasons = filteredSeasons.slice(firstIndex, lastIndex);
        const totalPages = filteredSeasons.length / seasonsPerPage;

        return (
            <div>
                <br></br>
                <div className="card col-md-8 offset-md-2">
                    <div className="card-body">

                        <div className="row">
                            <div style={{marginLeft: "30px"}}>{<img src={this.state.competition.logoLink} alt="Logo" height="80px"/>}</div>
                            <div style={{fontSize:"35px", marginTop:"10px", marginLeft:"25px", FontWeight: "bold"}}>{this.state.competition.name}</div>
                        </div>

                        <div style={{height:"70px" ,horizontalAlign:"center", verticalAlign:"center", paddingLeft:"30px", marginTop:"10px" , backgroundColor:"#e0e0d1"}}>
                            <div className="row" style={{paddingTop:"5px"}}>
                                <div >{this.state.competition.sportType}</div>
                                <label style={{marginLeft: "5px"}}>competition.</label>
                            </div>
                            <div className="row" style={{}}>
                                <label>Region:</label>
                                <div style={{marginLeft: "5px"}}>{this.state.competition.region}</div>
                            </div>
                        </div>

                        <div style={{marginTop:"40px"}}>Seasons of this competition:</div>
                        <div className="row">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="text-center">Season</th>
                                        <th className="text-center" onClick={this.sortData}>Competition start<div className={this.state.sortToggle ? "arrow arrow-up" : "arrow arrow-down"}></div></th>
                                        <th className="text-center">Competition finish</th>
                                        <th></th>
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
                                                    <td className="text-center align-middle">{season.started.substring(0,4)}&#47;{season.finished.substring(0,4)}</td>
                                                    <td className="text-center align-middle">{season.started}</td>
                                                    <td className="text-center align-middle">{season.finished}</td>
                                                    <td className="align-middle">
                                                        <button onClick={ () => this.viewSeason(season.id)} className="btn btn-info">View &#62;&#62;</button>
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

                        <br></br>
                        <div className="row" style={{marginLeft:"10px"}}>
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>&#60;&#60; Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCompetitionComponent;