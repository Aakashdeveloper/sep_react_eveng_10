import React from 'react';
import { render } from 'react-dom';

function DisplayCity(props){
    console.log(props)
    const renderList = ({mycity})  => {
        if(mycity){
            return mycity.map((item) =>{
                return(
                    <div>
                        <h1>{item.city_name}</h1>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>City List</h2>
            </center>
            {renderList(props)}
        </div>
    )
}

export default DisplayCity