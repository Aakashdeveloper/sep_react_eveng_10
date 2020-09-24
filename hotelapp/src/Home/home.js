import React from 'react';
import Search from './search';
import QuickApi from './QuickSearch';

const Home = () => {
    return(
        <React.Fragment>
            <Search/>
            <QuickApi/>
        </React.Fragment>
    )
}

export default Home;