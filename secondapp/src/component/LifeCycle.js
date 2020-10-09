//Get Intial State
//Set intial state
//Before get created
//Render
//After get Created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1Get Intial State
    constructor(props){
        super()

        //2Set intial state
        this.state={
            title:'LifeCycle Method'
        }
        console.log(">>>>1,2 Inside constructor<<<<<")
    }

    //3 Before get created
    UNSAFE_componentWillMount(){
        console.log(">>>>3 Inside componentWillMount<<<<<")
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>Inside getDerivedStateFromProps<<<<< state",state)
        console.log(">>>>Inside getDerivedStateFromProps<<<<< props",state)
    }

    componentWillUpdate(){
        console.log(">>>>Inside componentWillUpdate<<<<<")
    }

    componentDidUpdate(){
        console.log(">>>>Inside componentDidUpdate<<<<<")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>Inside shouldComponentUpdate<<<<<")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4Render
    render(){
        console.log(">>>>4 Inside render<<<<<")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After get Created
    componentDidMount(){
        console.log(">>>>5 Inside componentDidMount<<<<<")
    }

    // Call when we leave the component
    componentWillUnmount(){
        alert("Do You want to leave")
    }
}

export default LifeCycle;