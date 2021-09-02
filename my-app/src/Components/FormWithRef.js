import React, { Component } from 'react'

export default class FormWithRef extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:""
        }
        this.textInput=React.createRef()//creating Ref
        
    }
    //  componentDidMount= () =>{
    //     console.log(this.textInput.current)
    //     this.textInput.current.focus()
    // }
    handleSubmit = e =>{
        e.preventDefault()
        // console.log(this.textInput.current.value)
        this.setState({value: this.textInput.current.value})
    }
    
    render() {
        return (
        //   <form>
        //        Name:<input type="text" ref={this.textInput}/>
        //        <br/>
        //        <br/>
        //        Password:<input type="text" />
        //        <br/>
        //        <br/>
        //        Address:<input type="text"/>

        //   </form>
        <React.Fragment>
            <h2>You typed: {this.state.value}</h2>
            <form onSubmit={this.handleSubmit}>
                Input:<input type="text" ref={this.textInput}/>
                <input type="submit" value="Submit"/>
            </form>
        </React.Fragment>
        );
    }
}
