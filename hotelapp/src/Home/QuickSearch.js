import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const quickurl = "https://developerfunnel.herokuapp.com/booking";

class QuickApi extends Component{
    constructor(){
        super()

        this.state={
            triptype:''
        }
    }

    render(){
        return(
            <QuickDisplay tripdata={this.state.triptype}/>
        )
    }

    componentDidMount(){
        fetch(quickurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({triptype:data})
        })
    }
}

export default QuickApi;
