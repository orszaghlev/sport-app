import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MatchService from '../services/MatchService';
import AuthService from '../services/AuthService';

class CreateCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            user: undefined,
            region: '',
            sportType: '',
            name: '',
            logoLink: '',
        }

        this.changeRegionHandler = this.changeRegionHandler.bind(this);
        this.changeSportTypeHandler = this.changeSportTypeHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLogoLinkHandler = this.changeLogoLinkHandler.bind(this);
        this.saveOrUpdateCompetition = this.saveOrUpdateCompetition.bind(this);
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
            MatchService.getCompetitionById(this.state.id).then( (res) => {
                let competition = res.data;
                this.setState({region: competition.region,
                    sportType: competition.sportType,
                    name: competition.name,
                    logoLink: competition.logoLink
                });
            });
        }
    }

    saveOrUpdateCompetition = (c) => {
        c.preventDefault();
        let competition = {region: this.state.region, sportType: this.state.sportType, name: this.state.name, logoLink: this.state.logoLink};
        console.log('competition => ' + JSON.stringify(competition));

        if(this.state.id === '_add') {
            MatchService.createCompetition(competition).then(res => {
                this.props.history.push('/competitions-admin');
            });
        } else {
            MatchService.updateCompetition(competition, this.state.id).then(res => {
                this.props.history.push('/competitions-admin');
            })
        }
    }

    changeRegionHandler = (event) => {
        this.setState({region: event.target.value});
    }

    changeSportTypeHandler = (event) => {
        this.setState({sportType: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeLogoLinkHandler = (event) => {
        this.setState({logoLink: event.target.value});
    }

    cancel() {
        this.props.history.push('/competitions-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Competition</h3>
        } else {
            return <h3 className="text-center">Update Competition</h3>
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
                                        <label>Region:</label>
                                        <input placeholder="Region" name="region" className="form-control"
                                            value={this.state.region} onChange={this.changeRegionHandler}/>
                                    </div>
                                    <label>Sport Type:</label>
                                    <div className="form-check">
                                        <label>
                                        <input type="radio" name="sportType" value="American football"
                                            checked={this.state.sportType === "American football"}
                                            onChange={this.changeSportTypeHandler} className="form-check-input"/>
                                            American football
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label>
                                        <input type="radio" name="sportType" value="Basketball"
                                            checked={this.state.sportType === "Basketball"}
                                            onChange={this.changeSportTypeHandler} className="form-check-input"/>
                                            Basketball
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label>
                                        <input type="radio" name="sportType" value="Football"
                                            checked={this.state.sportType === "Football"}
                                            onChange={this.changeSportTypeHandler} className="form-check-input"/>
                                            Football
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label>
                                        <input type="radio" name="sportType" value="Handball"
                                            checked={this.state.sportType === "Handball"}
                                            onChange={this.changeSportTypeHandler} className="form-check-input"/>
                                            Handball
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label>
                                        <input type="radio" name="sportType" value="Ice hockey"
                                            checked={this.state.sportType === "Ice hockey"}
                                            onChange={this.changeSportTypeHandler} className="form-check-input"/>
                                            Ice hockey
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Logo Link:</label>
                                        <input placeholder="Logo Link" name="logoLink" className="form-control"
                                            value={this.state.logoLink} onChange={this.changeLogoLinkHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateCompetition}>Save</button>
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

export default CreateCompetitionComponent;