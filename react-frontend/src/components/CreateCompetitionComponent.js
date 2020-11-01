import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class CreateCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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
                this.props.history.push('/events-admin');
            });
        } else {
            MatchService.updateCompetition(competition, this.state.id).then(res => {
                this.props.history.push('/events-admin');
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
        this.props.history.push('/events-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Competition</h3>
        } else {
            return <h3 className="text-center">Update Competition</h3>
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
                                        <label>Region:</label>
                                        <input placeholder="Region" name="region" className="form-control"
                                            value={this.state.region} onChange={this.changeRegionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Sport Type:</label>
                                        <input placeholder="Sport Type" name="sportType" className="form-control"
                                            value={this.state.sportType} onChange={this.changeSportTypeHandler}/>
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