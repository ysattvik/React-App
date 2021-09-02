import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
        // this.clickHandler=this.clickHandler.bind(this)//third method to bind event handler
    }
    // clickHandler()
    // {
    //     this.setState({
    //         message:'Goodbye'
    //     })
    //     console.log(this)
    // }
    clickHandler = ()=>{  //forth method to bind event handler
        this.setState({
            message:'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> first method to bind event handler */}
                 {/*<button onClick={()=> this.clickHandler()}>click</button> second approach to bind event handler*/}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
