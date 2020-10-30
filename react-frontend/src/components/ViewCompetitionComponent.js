import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewCompetitionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            competition: {}
        }
    }

    componentDidMount() {
        MatchService.getCompetitionById(this.state.id).then(res => {
            this.setState({competition: res.data});
        })
    }

    return() {
        this.props.history.push('/events');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Competition Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Region:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.competition.region}</div>
                        </div>
                        <div className="row">
                            <label>Sport Type:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.competition.sportType}</div>
                        </div>
                        <div className="row">
                            <label>Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.competition.name}</div>
                        </div>
                        <div className="row">
                            <label>Logo Link:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.competition.logoLink}</div>
                        </div>
                        <br></br>
                        <div className="row">
                            <button className="btn btn-danger" onClick={this.return.bind(this)}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCompetitionComponent;