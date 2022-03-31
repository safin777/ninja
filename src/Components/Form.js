
import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    name : '',
    description : '',
    notes:  '',
  }

  handleTitle = (e) =>{
    
     if(e.target.type === 'text'){  
      console.log (e.target.value);
      this.setState({
        name: e.target.value
      })
     }

     else if(e.target.type === 'textarea'){
      console.log (e.target.value);
      this.setState({
        description: e.target.value
      })
     }

     else if(e.target.type === 'select-one'){
      
      this.setState({
        notes: e.target.value
      })
     }

     else{
      console.log('Nothing is here');
     }
      
     
  }

  
  

  render() {
    const {name,description,notes} = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.handleTitle} placeholder='Enter your username'/>
        <br></br>
        <input type="textarea" value={description} onChange={this.handleTitle}/>
        <br></br>
        <select value={notes} onChange={this.handleTitle}>
          <option value="Notes 1">Notes 1</option>
          <option value="Notes 2">Notes 2</option>
          <option value="Notes 3">Notes 3</option>
        </select>
        
      </div>
    )
  }
}
