import React, { Component } from 'react';
import UserService from '../services/UserService';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({user: res.data});
        });
    }

    return() {
        this.props.history.push('/users');
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View User</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>First Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.user.firstName}</div>
                        </div>
                        <div className="row">
                            <label>Last Name:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.user.lastName}</div>
                        </div>
                        <div className="row">
                            <label>E-Mail:</label>
                            <div style={{marginLeft: "5px"}}>{this.state.user.email}</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.return.bind(this)}>Return</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewUserComponent;