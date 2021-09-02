import React, { Component } from 'react'
import StudentComponent from './StudentComponent'

 class SchoolComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              schoolName:'Sunbeam School'
         }
         this.greetSchool=this.greetSchool.bind(this)
     }
     greetSchool(studentname)
     {
        //  alert("Welcome"+this.state.schoolName)
       alert(`Welcome ${this.state.schoolName} from ${studentname}`)
     }
    render() {
        return (
            <div>
                <StudentComponent greetHandler={this.greetSchool}/>
            </div>
        )
    }
}

export default SchoolComponent
