import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const hotelurl = "https://developerfunnel.herokuapp.com/hotelsdetails";
const bookingurl = "https://developerfunnel.herokuapp.com/placeBook";

class PlaceOrder extends Component{
    constructor(){
        super()

        this.state={
            order_id: Math.floor(Math.random()*100000),
            hotel_name:'',
            name:'',
            phone:'',
            address:'',
            person:''
        }
    }

    componentDidMount(){
        let hotelid= this.props.match.params.id;
        fetch(`${hotelurl}/${hotelid}`,{method:'GET'})
        .then((data) =>  data.json())
        .then((res) => this.setState({hotel_name:res[0].name}))
    }

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }
    handleChangePhone=(event)=>{
        this.setState({phone:event.target.value})
    }
    handleChangeAddress=(event)=>{
        this.setState({address:event.target.value})
    }
    handleChangePerson=(event)=>{
        this.setState({person:event.target.value})
    }

    handleSubmit=()=>{
        var data={
            "order_id":this.state.order_id,
            "hotel_name":this.state.hotel_name,
            "name":this.state.name,
            "phone":this.state.phone,
            "address":this.state.address,
            "person":this.state.person
        }
        fetch(bookingurl,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((this.props.history.push('/viewBooking')))
        .catch((err) =>{console.log(err)} )
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order Id</label>
                            <input type="text" name="order_id" value={this.state.order_id} readOnly
                             className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel Name</label>
                            <input type="text" name="hotelname" value={this.state.hotel_name} readOnly
                             className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="fname" value={this.state.name}
                             className="form-control" onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="phone" value={this.state.phone}
                             className="form-control" onChange={this.handleChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Address</label>
                            <input type="text" name="address" value={this.state.address}
                             className="form-control" onChange={this.handleChangeAddress}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Number Of Person</label>
                            <select name="person" value={this.state.person}
                             className="form-control" onChange={this.handleChangePerson}>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                            </select>
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-info">
                            Back
                        </Link> &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Submit
                        </button>
                     </div>

                </div>

            </div>

        )
    }
} 

export default PlaceOrder;