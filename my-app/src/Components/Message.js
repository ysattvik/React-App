import React, {Component} from 'react'

class Message extends Component
{   
    constructor(){
        super()
        
            this.state={
                message:'This is a simple message'
            }
        
    }
    changeMessage()
    {
        this.setState({         //it is to assign or set message to any variable 
            message:'Thanks for subscribing'
        })
    }
    render()
    {                                                   //here arrow function is used
        return (
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
                
            </div>
        ) 
    }
}
export default Message