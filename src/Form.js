import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    this.state = {
         name: '',
         Comments: ''
       
      }
    }

    UsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    
    CommentsChange = event => {
        this.setState({
            Comments: event.target.value
        })
    }
    
    Submit = event => {
        document.write(`${this.state.username} ${this.state.Comments} `)
        event.preventDefault()
    }


  render() {
    return (
        <form onSubmit={this.Submit}>
            <div>
                <label>Username</label>
                <input
                type='text' value={this.state.username} 
                onChange={this.UsernameChange}
                />
            </div>
            <div>
                <label>Comments</label>
                <input value={this.state.Comments} 
                onChange={this.CommentsChange}></input>
            </div>
          
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form;