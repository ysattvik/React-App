import React from 'react'

function StudentComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>click me</button> */}
            {/* <button onClick = {() =>props.greetHandler()}>click me</button> */}
            <button onClick={() => props.greetHandler('sname')}>click me</button>
        </div>
    )
}

export default StudentComponent


