import React from 'react';
import Search from './search';
import QuickApi from './QuickSearch';

const Home = (props) => {
    console.log("in home>>>>",props)
    return(
        <React.Fragment>
            <Search/>
            <QuickApi/>
        </React.Fragment>
    )
}

export default Home;