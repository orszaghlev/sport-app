import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    editUser(id) {
        this.props.history.push(`/update-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    addUser() {
        this.props.history.push('/add-user');
    }

    render () {
        return (
            <div>
                <h2 className="text-center">Users</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-Mail</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserComponent