import React, { Component } from 'react'

export default class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef() 
        //second approach
        this.CbRef=null;
        this.setCbRef= element =>{
            this.CbRef=element;
        }
    }
    componentDidMount(){
       
        if(this.CbRef){
            this.CbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log("this.inputRef")
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef}/>
               <input type="text" ref={this.setCbRef}/>
               <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}
