import React, { Component } from 'react'

export default class FocusInput extends Component {
    constructor(props) {
        super(props)
         this.componentRef = React.createRef()
    }
    clickHandler = () =>{
        this.componentRef.current.focusInput()
        // this.componentRef.current.focus()
    }

    
    render() {
        return (
            <div>
                {/* <Input ref={this.componentRef}/> */}
               <button onClick={this.clickHandler}>Focus Input</button> 
            </div>
        )
    }
}
