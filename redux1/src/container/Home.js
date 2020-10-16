import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions';
import {bindActionCreators} from 'redux';
import MoviesDisplay from '../component/MoviesDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <MoviesDisplay moviesdata={this.props.datalist}/>
            </div>
        )
    }
}

//Help to recive the state from store
function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.films
    }
}

//Help to make action availabe/dispatch
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)