import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{

    costFilter = (event) => {
        let costtype= (event.target.value).split(',');
        let lcost = Number(costtype[0]); 
        let hcost = Number(costtype[1]); 
        let TripType= sessionStorage.getItem('tripid');
        let rrurl;
        if(costtype==""){
            rrurl = `${rurl}/${TripType}`
        }else{
            rrurl = `${rurl}/${TripType}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(rrurl)
        .then((response) => {this.props.costpertype(response.data)})

    }

    render(){
        return(
            <React.Fragment>
                <center>Cost Type</center>
                <div onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cost"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="cost"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="cost"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,9000" name="cost"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001,20000" name="cost"/>9001-20000
                    </label>
                </div>
            </React.Fragment>

        )
    }

}

export default CostFilter;