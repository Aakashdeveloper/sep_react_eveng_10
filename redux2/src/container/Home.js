import React,{Component} from 'react';
import {latestNews,articleNews,galleryNews} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
           <React.Fragment>
               <LatestDisplay ldata={this.props.datalist.latestNews}/>
               <ArticleDisplay adata={this.props.datalist.articleNews}/>
           </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    //console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

Home.protoTypes ={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home);