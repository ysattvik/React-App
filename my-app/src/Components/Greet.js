import React from 'react'

// function Greet()
// {
//     return <h1>Hello React, how are you</h1>

// }
// const Greet=()=>{                        //in arrow function () is replace by props
export const Greet = props =>{              //when arrow function has more than one line then we put in {}
const{name,age}=props           //Another way of destructuring
// export const Greet = ({name,age}) =>{       //destructuring of props
// console.log(props)                      //props is attribute or property of  a function
return (
    <div>
<h1>Hello {name} and age is {age}</h1>
{/* {props.children} */}
</div>             //If more than one HTML tag is there than we enclose it inside div
) 
}
//   export default Greet 