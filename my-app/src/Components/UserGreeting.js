import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isLoggedIn:true
        }
    }
    
    render() {

        //fourth way of condition

       return this.state.isLoggedIn && <div>Welcome Ysattvik</div>



        //third way of condition is terary opeartor
        // return this.state.isLoggedIn ?
        // (<div>Welcome Ysattvik</div>):
        // (<div>welcome Guest</div>)

        //Second approach of condition using variables
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     return(
        //         <div>Welcome Ysattvik</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return(
        //     <div>{message}</div>
        // )


//First approach of condition (if else)

        // if(this.state.isLoggedIn)
        // {
        //     return(
        //         <div>Welcome Ysattvik</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome guest</div>
        //     )
        // }
       
    }
}

export default UserGreeting
