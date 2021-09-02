import React, { Component } from 'react'

export default class Marks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mroll:this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("Get Derived State From Props")
        console.log(props,state)
        if(props.roll!==state.mroll){
            return{mroll: props.roll }
        }
        return null
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        if(this.state.mroll<107){
        console.log("Mark ShouldComponentUpdates")
        console.log(nextProps,nextState)
        return true
        }
       
        console.log(nextProps,nextState)
        return false
    }
    render() {
        console.log("Marks-Component Rendered -Child of Student")
        return (
            <div>
               <h1>{this.state.mroll}</h1>
            </div>
        )
    }
}
