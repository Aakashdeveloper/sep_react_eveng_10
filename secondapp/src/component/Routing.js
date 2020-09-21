import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/contact" component={Contact}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;