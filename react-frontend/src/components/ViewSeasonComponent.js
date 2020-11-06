import React, { Component } from 'react';
import MatchService from '../services/MatchService';

class ViewSeasonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            season: {}
        }
    }

    componentDidMount() {
        MatchService.getSeasonById(this.state.id).then(res => {
            this.setState({season: res.data});
        })
    }

    return() {
        this.props.history.push('/seasons');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Season Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Competition ID:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.competitionId}</div>
                        </div>
                        <div className="row">
                            <label>Started:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.started}</div>
                        </div>
                        <div className="row">
                            <label>Finished:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.season.finished}</div>
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

export default ViewSeasonComponent;