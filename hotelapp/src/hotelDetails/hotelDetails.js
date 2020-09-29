import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            tripid: sessionStorage.getItem('tripid')
        }
    }

    render(){
        console.log(this.state.details)
        var {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <Tabs>
                            <TabList>
                                <Tab><span className="overview">OverView</span></Tab>
                                <Tab><span className="overview">Contact</span></Tab>
                            </TabList>
                            <TabPanel>
                                <div>
                                    <div className="about">About This Place</div>
                                    <br/>
                                    <div>Type</div>
                                    
                                    <div>Cost Per Night</div>
                                    <div>Rs. {details.cost}</div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div>
                                    <div className="about">Contact Info</div>
                                    <div>Phone Number</div>
                                    <div>6868553576</div>
                                    <div>{details.locality}</div>
                                    <div>{details.city_name}</div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div>
                        &nbsp;
                        <Link to={`/list/${this.state.tripid}`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${this.props.match.params.id}`} className="btn btn-success">Place Order</Link>
                        <br/>
                    </div>
                </div>
                
                 
            </div>

        )
    }

    async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response  = await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }
}

export default Details;