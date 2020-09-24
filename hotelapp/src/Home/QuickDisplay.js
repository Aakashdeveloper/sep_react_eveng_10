import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to="/" key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                   Start Your Trip in {item.name} style
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeding">
                Quick Searches
            </p>
            <p className="quickSearchSubHeding">
                Discover Trip By Type
            </p>
            {listTrip(props)}
        </div>
    )
}


export default QuickDisplay;