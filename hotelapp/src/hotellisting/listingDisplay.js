import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';


const ListingDisplay = (props) => {

    const renderList = ({hotellist}) => {
        if(hotellist){
            return hotellist.map((item) => {
                return(
                    <p>{item.name}</p>
                )
            })
        }else{
            return(
                <div className="item">
                    <div className="row row-height">
                        <div className="col-sm-3">
                            <img src="/images/loader.gif"/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay;