import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/users/')
            .then(response => {
                console.log(response);
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.users.map((user) => {
            return <TableRow obj={user} key={user.id} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Users:</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Online</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}