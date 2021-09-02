import React, { PureComponent } from 'react'

export class RegCompo extends PureComponent {
    render() {
        console.log("Regular Component Rendered")
        return (
            <div>
                Regular Component{this.props.name}
            </div>
        )
    }
}

export default RegCompo
