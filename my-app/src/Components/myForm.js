import React, { Component } from 'react'

class myForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:''
        }
    }
    
   


    render() {
        return (
         
           <div className="wrapper">
               <div className="title">Registration Form</div>
               <div className="form">
                   <div className="input_field">
                       <label>First Name</label>
                       <input type="text" value={this.fname} className="input"></input>
                   </div>
                   <div className="input_field">
                       <label>Last Name</label>
                       <input type="text" className="input"></input>
                   </div>
                   <div className="input_field">
                       <label>Pasword</label>
                       <input type="password" className="input"></input>
                   </div>
                   <div className="input_field">
                       <label>Confirm Password</label>
                       <input type="password" className="input"></input>
                   </div> 
                   <div className="input_field">
                       <label>Gender</label>
                       <div className="custom_select">
                           <select>
                           <option value="">Select</option>
                           <option value="">Male</option>
                           <option value="">Female</option>
                           </select>
                       </div>
                   </div>
                   <div className="input_field">
                       <label>Email Address</label>
                       <input type="email" className="input"></input>
                   </div> 
                   <div className="input_field">
                       <label>Mobile</label>
                       <input type="tel" className="input"></input>
                   </div>
                   <div className="input_field">
                       <label>Address</label>
                       <textarea className="textarea"></textarea>
                   </div> 
                   <div className="input_field">
                       <label>Postal Code</label>
                       <input type="text" className="input"></input>
                   </div> 
                   <div className="input_field terms" >
                       <label className="check">
                           <input type="checkbox"></input>
                            <span className="checkmark"></span>
                       </label>
                       <p>Agreed to terms and condition</p>
                   </div>
                   <div className="inputfield">
                       <input type="submit" value="Register" class="btn"></input>
                   </div>
               </div>

           </div>
          
        )
    }
}

export default myForm
