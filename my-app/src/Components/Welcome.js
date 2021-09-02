import React, {Component} from 'react'

class Welcome extends Component
{
    render(){
     const{name,age}=this.props//First way of destructuring
    //  const {state1, state2}=this.state //Second way of destructuring
        // return <h1>Welcome {this.props.name} and {this.props.age}</h1>
        return <h1>Welcome {name} and {age}</h1>
    }
}
export default Welcome