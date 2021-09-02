//Difference between JSX and Simple Java Script

import React from "react"

//JSX Code
const Hello = () =>{
    return (
        <div className='dummyClass'>
        <h1>Hello </h1>
        </div>
    )
}

//Simple Java Script Code

// const Hello =() =>
// {
//     return React.createElement(
//         'div' ,
//         {id:'hello', className:'dummyName'},
//         React.createElement('h1', null,'Hello React')
//     )
// }

export default Hello