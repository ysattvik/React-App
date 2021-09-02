import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCompo from './PureCompo'
import RegCompo from './RegCompo'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Vishwash"
         }
     }
     componentDidMount(){
         setInterval(() =>{
             this.setState({
                name:'Vishwash'
             })           
         }, 2000)
     }
    render() {
        console.log("Parent Component Rendered")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegCompo name={this.state.name}></RegCompo>
                <PureCompo name={this.state.name}></PureCompo> */}
            </div>
        )
    }
}

export default ParentComp
