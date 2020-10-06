import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import UserList from './UserList';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import ProfileComponent from './Profile';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/profile" component={ProfileComponent}/>
                <Route path="/list" component={UserList}/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;