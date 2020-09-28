import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/home';
import ListingApi from './hotellisting/listingapi';
import HotelDetails from './hotelDetails/hotelDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/list/:id" component={ListingApi}/>
                    <Route path="/details/:id" component={HotelDetails}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;
