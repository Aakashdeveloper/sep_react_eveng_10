import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist/"

class ListingApi extends Component {
    constructor(){
        super()

        this.state={
            hoteldata:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter Here
                </div>
                <div className="col-md-10">
                    <ListingDisplay hotellist={this.state.hoteldata}/>
                </div>
            </div>

        )
    }

    componentDidMount(){
        var tripid  = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripid);
        axios.get(`${url}${tripid}`)
        .then((response) => { this.setState({hoteldata:response.data})});
    }
}

export default ListingApi