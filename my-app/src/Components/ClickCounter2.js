import React, { Component } from 'react'

export default class ClickCounter2 extends Component {
   
    
    render() {
        const {count , incrementCount}=this.props
        return (
            <button onClick={incrementCount}> Click {count} Me</button>
        )
    }
}
