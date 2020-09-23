import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location"

class Search extends Component{
    constructor(){
        super()

        this.state={
            city:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="imageContainer">
                    <div id="logo">
                        <b>D!</b>
                    </div>
                    <div className='heading'>
                        Plan Trip With Us.
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropDown">
                            <option>-----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.city)}
                        </select>
                        <select className="reataurantsinput">
                            <option>-----SELECT YOUR HOTEL----</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => { 
            this.setState({city:data})
        })
        .catch(() => {
            this.setState({city:[]})
        })
    }
}

export default Search;