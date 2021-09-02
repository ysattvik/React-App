import React,  from 'react'

// This code for input ref
export default class extends Component {
    constructor(props) {
        super(props)
    
       this.inputRef=React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

//this code for forwording reg

// const Input = React.forwardRef((props , ref) => {
//     return(
//         <div>
//         <input type="text" ref={ref}/>
//         </div>
//     )
// })
// export default Input