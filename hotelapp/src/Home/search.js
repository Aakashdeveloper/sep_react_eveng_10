import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(props){
        super(props)

        this.state={
            city:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity =(event) => {
        console.log(event.target.value);
        fetch(`${hurl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handleHotel = (event) => {
        console.log(event.target.value)
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(">>>>props in search",this.props)
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
                        <select className="locationDropDown" onChange={this.handleCity}>
                            <option>-----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.city)}
                        </select>
                        <select className="reataurantsinput" onChange={this.handleHotel}>
                            <option>-----SELECT YOUR HOTEL----</option>
                            {this.renderHotel(this.state.hotels)}
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

export default withRouter(Search);