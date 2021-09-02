import React, { Component } from 'react'

export default class Form1 extends Component {
constructor(props) {
    super(props)

    this.state = {
         fname:"",
         lname:"",
         password:"",
         mobile:""
    }
};
// handleFname = e =>{
//     this.setState({fname :e.target.value}) ; 
// };
// handleLname = e =>{
//     this.setState({lname :e.target.value})  ;
// };

// handlePass = e =>{
//     this.setState({password :e.target.value})  ;
// };

        handleChange = e =>{
        // console.log(e.target.name)
        // this.setState({[e.target.name]:e.target.value}) 
        // console.log([e.target.name])  
        const value = e.target.name === "fname" ||"lname"
        ? e.target.value.toUpperCase()
        : e.target.value
        this.setState({[e.target.name]: value})
        const value1=e.target.name==="mobile"
        ? e.target.value.toUpperCase().substring(0,10)
        :e.target.value1
        this.setState({[e.target.name]: value1})
        }
        handleSubmit = e =>{
            console.log(e.target);
            this.setState({submit:e.target.value})
            e.preventDefault();
        }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" 
                    name="fname"
                    value={this.state.fname} 
                    // onChange={this.handleFname}>
                    onChange={this.handleChange}>
                    </input>
                </label>
                <br/><br/>
                <label>
                    Last Name:
                    <input type="text" 
                    name="lname"
                    value={this.state.lname}
                    // onChange={this.handleLname}>
                    onChange={this.handleChange}>
                    </input>
                </label>
                <br/><br/>
                <label>
                    Password:
                    <input type="text" 
                    name="password"
                    value={this.state.password}
                    // onChange={this.handlePass}>
                    onChange={this.handleChange}>
                    </input>
                </label>
                <br/><br/>
                <label>
                    Mobile:
                    <input type="text" 
                    name="mobile"
                    value={this.state.mobile}
                    // onChange={this.handlePass}>
                    onChange={this.handleChange}>
                    </input>
                </label>
                <br/><br/>
                <input type="submit" value="Submit" 
                ></input>
                </form> 
            </div>
        )
    }
}