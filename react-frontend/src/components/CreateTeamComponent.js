import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class CreateTeamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            shortName: '',
            foundingDate: '',
            teamValue: '',
            valueCurrency: '',
            imageLink: '',
            homePlace: ''
        }

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeShortNameHandler = this.changeShortNameHandler.bind(this);
        this.changeFoundingDateHandler = this.changeFoundingDateHandler.bind(this);
        this.changeTeamValueHandler = this.changeTeamValueHandler.bind(this);
        this.changeValueCurrencyHandler = this.changeValueCurrencyHandler.bind(this);
        this.changeImageLinkHandler = this.changeImageLinkHandler.bind(this);
        this.changeHomePlaceHandler = this.changeHomePlaceHandler.bind(this);
        this.saveOrUpdateTeam = this.saveOrUpdateTeam.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return
        } else {
            MatchService.getTeamById(this.state.id).then( (res) => {
                let team = res.data;
                this.setState({fullName: team.fullName,
                    shortName: team.shortName,
                    foundingDate: team.foundingDate,
                    teamValue: team.teamValue,
                    valueCurrency: team.valueCurrency,
                    imageLink: team.imageLink,
                    homePlace: team.homePlace
                });
            });
        }
    }

    saveOrUpdateTeam = (t) => {
        t.preventDefault();
        let team = {fullName: this.state.fullName, shortName: this.state.shortName, foundingDate: this.state.foundingDate, teamValue: this.state.teamValue, valueCurrency: this.state.valueCurrency, imageLink: this.state.imageLink, homePlace: this.state.homePlace};
        console.log('team => ' + JSON.stringify(team));

        if(this.state.id === '_add') {
            MatchService.createTeam(team).then(res => {
                this.props.history.push('/events-admin');
            });
        } else {
            MatchService.updateTeam(team, this.state.id).then(res => {
                this.props.history.push('/events-admin');
            })
        }
    }

    changeFullNameHandler = (event) => {
        this.setState({fullName: event.target.value});
    }

    changeShortNameHandler = (event) => {
        this.setState({shortName: event.target.value});
    }

    changeFoundingDateHandler = (event) => {
        this.setState({foundingDate: event.target.value});
    }

    changeTeamValueHandler = (event) => {
        this.setState({teamValue: event.target.value});
    }

    changeValueCurrencyHandler = (event) => {
        this.setState({valueCurrency: event.target.value});
    }

    changeImageLinkHandler = (event) => {
        this.setState({imageLink: event.target.value});
    }

    changeHomePlaceHandler = (event) => {
        this.setState({homePlace: event.target.value});
    }

    cancel() {
        this.props.history.push('/events-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Team</h3>
        } else {
            return <h3 className="text-center">Update Team</h3>
        }
    }

    render() {
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
                                        <label>Full Name:</label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                            value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Short Name:</label>
                                        <input placeholder="Short Name" name="shortName" className="form-control"
                                            value={this.state.shortName} onChange={this.changeShortNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Founding Date:</label>
                                        <input placeholder="Founding Date" name="foundingDate" className="form-control"
                                            value={this.state.foundingDate} onChange={this.changeFoundingDateHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Team Value:</label>
                                        <input placeholder="Team Value" name="teamValue" className="form-control"
                                            value={this.state.teamValue} onChange={this.changeTeamValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Value Currency:</label>
                                        <input placeholder="Value Currency" name="valueCurrency" className="form-control"
                                            value={this.state.valueCurrency} onChange={this.changeValueCurrencyHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Image Link:</label>
                                        <input placeholder="Image Link" name="imageLink" className="form-control"
                                            value={this.state.imageLink} onChange={this.changeImageLinkHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Home Place:</label>
                                        <input placeholder="Home Place" name="homePlace" className="form-control"
                                            value={this.state.homePlace} onChange={this.changeHomePlaceHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateTeam}>Save</button>
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

export default CreateTeamComponent;