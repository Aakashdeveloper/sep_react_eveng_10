import React,{Component} from 'react';
import axios from 'axios';
import BookingView from './viewBookingDisplay';

const url ="https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingView bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url)
        .then((response) => {this.setState({booking:response.data})})
    }

}

export default Booking