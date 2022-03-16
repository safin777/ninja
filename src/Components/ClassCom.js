import React from 'react'

class ClassCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    setInterval(()=> {
       this.setState({
         date:new Date()
       });
    },1000);
  }

  render() {
    return (
      <h1>Its time {this.state.date.toLocaleTimeString(this.props.locale)}</h1>
    )
  }
}

export default ClassCom
