import React, {Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5001/api/auth/users"

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        return(
            <UserDisplay userData={this.state.users}/>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {this.setState({users:data})})
    }
}

export default UserList;