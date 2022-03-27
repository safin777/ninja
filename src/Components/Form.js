
import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    name : '',
  }

  handleTitle = (e) =>{
     console.log (e.target.value)
     this.setState ({
       name: e.target.value,
     });
  }
  

  render() {
    const {name} = this.state;
    return (
      <div >
        <input type="text" value={name} onChange={this.handleTitle} placeholder='Enter your username'/>
        
      </div>
    )
  }
}
