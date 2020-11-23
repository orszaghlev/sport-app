import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from '../services/AuthService';

class CreateSeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            user: undefined,
            competitionId: '',
            started: '',
            finished: '',
        }

        this.changeCompetitionIdHandler = this.changeCompetitionIdHandler.bind(this);
        this.changeStartedHandler = this.changeStartedHandler.bind(this);
        this.changeFinishedHandler = this.changeFinishedHandler.bind(this);
        this.saveOrUpdateSeason = this.saveOrUpdateSeason.bind(this);
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (!user) this.setState({redirect: "/home"});
        if (user) {
            if (!user.roles.includes("ROLE_ADMIN")) this.setState({redirect: "/home"});
            this.setState({user: user, userReady: true, isAdmin: true})
        }

        if(this.state.id === '_add') {
            return
        } else {
            MatchService.getSeasonById(this.state.id).then( (res) => {
                let season = res.data;
                this.setState({competitionId: season.competitionId,
                    started: season.started,
                    finished: season.finished
                });
            });
        }
    }

    saveOrUpdateSeason = (s) => {
        s.preventDefault();
        let season = {competitionId: this.state.competitionId, started: this.state.started, finished: this.state.finished};
        console.log('season => ' + JSON.stringify(season));

        if(this.state.id === '_add') {
            MatchService.createSeason(season).then(res => {
                this.props.history.push('/seasons-admin');
            });
        } else {
            MatchService.updateSeason(season, this.state.id).then(res => {
                this.props.history.push('/seasons-admin');
            })
        }
    }

    changeCompetitionIdHandler = (event) => {
        this.setState({competitionId: event.target.value});
    }

    changeStartedHandler = (event) => {
        this.setState({started: event.target.value});
    }

    changeFinishedHandler = (event) => {
        this.setState({finished: event.target.value});
    }

    cancel() {
        this.props.history.push('/seasons-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Season</h3>
        } else {
            return <h3 className="text-center">Update Season</h3>
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()    
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Competition ID:</label>
                                        <input placeholder="Competition ID" name="competitionId" className="form-control"
                                            value={this.state.competitionId} onChange={this.changeCompetitionIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Started:</label>
                                        <input placeholder="Started" name="started" className="form-control"
                                            value={this.state.started} onChange={this.changeStartedHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Finished:</label>
                                        <input placeholder="Finished" name="finished" className="form-control"
                                            value={this.state.finished} onChange={this.changeFinishedHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateSeason}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSeasonComponent;