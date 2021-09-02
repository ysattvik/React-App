import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>greatParent</button>  {props.greetHandler} is reference to a function*/}
            <button onClick={() =>props.greetHandler('child')}>Greet Parent</button>
            {/* {props.greetParent()} is a function call */}
        </div>
    )
}

export default ChildComponent
