import React, { Component } from 'react'
import Marks from './Marks'

export default class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             roll:101
        }
    }
    componentDidMount(){
        console.log("Student Mounted");
    }
    componentWillUnmount(){
        console.log("Student unmounted")
    }
    clickHandle = () =>{
        console.log("Button Clicked")
        // this.setState({
        //     roll:102
        this.setState({roll: this.state.roll +2})
    }
    getSnapshotBeforeUpdate(preProps,PreState){
        console.log("Marks,Get Snapshot Return),it returns before update")
        console.log(preProps,PreState)
        return 45;
    }
    componentDidUpdate(preProps,PreState,snapshot)
    {
        console.log("Marks- ComponentDidUpdate-It runs agter update")
        console.log(preProps,PreState,snapshot)
    }
    render() {
        console.log("Student Component rendered -Child of LifecycleHome")
        return (
            <div>
              
                <Marks roll={this.state.roll}/>
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}
