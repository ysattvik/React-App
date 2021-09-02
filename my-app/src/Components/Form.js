import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topics:''
        }
    }
    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event => {
        this.setState({
        comments: event.target.value
        })

    }
    handleTopicsChange = event => {
        this.setState({
            topics:event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.topics} ${this.state.topics}`)
    }
    render() {

        const {username, comments, topics }=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" 
                    // value={this.state.username} 
                    value={username}
                    onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                   <textarea 
                //    value={this.state.comments}
                value={comments}
                    onChange={this.handleCommentsChange}>
                   </textarea>
                </div>
                <div>
                    <label>Select Topic</label>
                    <select 
                    // value={this.state.topics}
                    value={topics} 
                    onChange={this.handleTopicsChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                    <option value="php">PHP</option>

                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
