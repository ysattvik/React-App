import React, { Component } from 'react'
import Student from './Student'

export default class LifeCycleHome extends Component {
    constructor(props) {
        super(props)
    
       console.log("Constructor called")
       console.log(this.props)
       this.state={
           roll:'101'
    }
    }
    componentDidUnmount(){
        console.log("App Mounted")
    }
    componentWillUnmount(){
        console.log("App Unmounted")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("getderivedFromprops")
        console.log(props,state)
        return null
    }
    componentDidMount(){
        console.log("Component Did Mount")//it is called only one time in life cycle
    }
    render() {
        console.log(" Life Cycle Home, I am render")
        return (
        <div>
       
        <Student name="Chinki"/>
        </div>
        )

    }
}
