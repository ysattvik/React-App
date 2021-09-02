import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment()
    {
         this.setState(      //setState(,,) two parameter
                             //here one is increment value and second is arrow function
             {
                 count:this.state.count + 1
                
             },
              ()=>{
                  console.log('Call Back Value:',this.state.count)
              }
         )
        //this.setState(preState =>({
            //count: preState.count +1 //it takes alue from previous state,one click increment 5 time
        // this.setState((preState,props) =>({
        //     count:preState.count+props+addValue
       
        // }))
        console.log(this.state.count)//it's value is  1 less than as shown in browser
                                    //because console is run early than browser

    }
    
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
   
    render() {
        return (
            <div>
                <div>Count-{this.state.count}</div>
                <button onClick={() =>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
