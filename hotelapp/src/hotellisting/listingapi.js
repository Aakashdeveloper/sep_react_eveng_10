import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist/"

class ListingApi extends Component {
    constructor(){
        super()

        this.state={
            hoteldata:'',
            error:''
        }
    }

    setDataAsPerFilter(sortedata){
        this.setState({hoteldata:sortedata})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                   <RoomFilter roompertype={(data) => {this.setDataAsPerFilter(data)}} />
                   <CostFilter costpertype={(data) => {this.setDataAsPerFilter(data)}} />
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
        .then((response) => { this.setState({hoteldata:response.data})})
        .catch(() => {this.setState({error:'Error While fetching data'})})
    }
}

export default ListingApi