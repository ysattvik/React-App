import React from 'react'

function FunctionClick() {
    function clickHandler()       //Function inside function
    {
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>  {/* function is called when action is performed and gives result */} 
            {/* <button onClick={clickHandler()}>Click</button> function is show the message  already called */}
        </div>
    )
}

export default FunctionClick
