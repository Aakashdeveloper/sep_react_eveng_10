import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Header from './Header';
import Details from './AboutDetails';
import LifeCycle from './LifeCycle';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route  exact path="/about" component={About}/>
                <Route  path="/about/:topic" component={Details}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/lifeCycle" component={LifeCycle}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;