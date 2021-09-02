import React from 'react'

// const UpdatedComponent = OrigionalComponent =>{
    // class NewComponent extends React.Component{
    const withCounter = (WrappedComponent, incrementNumber) => {
        class withCounter extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount= () =>{
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }
        render(){
            console.log(this.props.name)
            return (
            <WrappedComponent count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
            />
            )
        }
    }
    return withCounter
}
export default withCounter