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
        this.props.history.push('/competitions');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Competition Details</h3>
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