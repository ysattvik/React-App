import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let mycolor = props.primary ? 'primary' :''
    return (
        <div>
            <h1 className={`${mycolor} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
