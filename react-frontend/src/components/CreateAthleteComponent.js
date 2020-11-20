import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class CreateAthleteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            dateOfBirth: '',
            value: '',
            valueCurrency: '',
            position: '',
            nationality: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeValueHandler = this.changeValueHandler.bind(this);
        this.changeValueCurrencyHandler = this.changeValueCurrencyHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeNationalityHandler = this.changeNationalityHandler.bind(this);
        this.saveOrUpdateAthlete = this.saveOrUpdateAthlete.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return
        } else {
            MatchService.getAthleteById(this.state.id).then( (res) => {
                let athlete = res.data;
                this.setState({name: athlete.name,
                    dateOfBirth: athlete.dateOfBirth,
                    value: athlete.value,
                    valueCurrency: athlete.valueCurrency,
                    position: athlete.position,
                    nationality: athlete.nationality
                });
            });
        }
    }

    saveOrUpdateAthlete = (a) => {
        a.preventDefault();
        let athlete = {name: this.state.name, dateOfBirth: this.state.dateOfBirth, value: this.state.value, valueCurrency: this.state.valueCurrency, position: this.state.position, nationality: this.state.nationality};
        console.log('athlete => ' + JSON.stringify(athlete));

        if(this.state.id === '_add') {
            MatchService.createAthlete(athlete).then(res => {
                this.props.history.push('/athletes-admin');
            });
        } else {
            MatchService.updateAthlete(athlete, this.state.id).then(res => {
                this.props.history.push('/athletes-admin');
            })
        }
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeDateOfBirthHandler = (event) => {
        this.setState({dateOfBirth: event.target.value});
    }

    changeValueHandler = (event) => {
        this.setState({value: event.target.value});
    }

    changeValueCurrencyHandler = (event) => {
        this.setState({valueCurrency: event.target.value});
    }

    changePositionHandler = (event) => {
        this.setState({position: event.target.value});
    }

    changeNationalityHandler = (event) => {
        this.setState({nationality: event.target.value});
    }

    cancel() {
        this.props.history.push('/athletes-admin');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Athlete</h3>
        } else {
            return <h3 className="text-center">Update Athlete</h3>
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
                                        <label>Name:</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth:</label>
                                        <input placeholder="Date of Birth" name="dateOfBirth" className="form-control"
                                            value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Value:</label>
                                        <input placeholder="Value" name="value" className="form-control"
                                            value={this.state.value} onChange={this.changeValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Value Currency:</label>
                                        <input placeholder="Value Currency" name="valueCurrency" className="form-control"
                                            value={this.state.valueCurrency} onChange={this.changeValueCurrencyHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Position:</label>
                                        <input placeholder="Position" name="position" className="form-control"
                                            value={this.state.position} onChange={this.changePositionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Nationality:</label>
                                        <input placeholder="Nationality" name="nationality" className="form-control"
                                            value={this.state.nationality} onChange={this.changeNationalityHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateAthlete}>Save</button>
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

export default CreateAthleteComponent;