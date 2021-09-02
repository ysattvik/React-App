import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export default class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                Component E context{this.context}
           <ComponentF/>
           </div>
        )
    }
}
// Component.contextType = UserContext

