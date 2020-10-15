import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions';
import {bindActionCreators} from 'redux';

class Home extends Component{
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
            </div>
        )
    }
}

//Help to recive the state from store
function mapStateToProps(state){
    console.log(state)
}

//Help to make action availabe/dispatch
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)