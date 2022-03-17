import React from 'react'
class ClassCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), locale:"en-US" }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000)
  }
  
  showDate=()=>{
    this.setState({
      locale:"bn-BD",
    })
  }

  render(){ 
    const {date , locale} = this.state;
    return (
      <>
        <h1>Its time {date.toLocaleTimeString(locale)}</h1>
        <button type='button' onClick={this.showDate}>Click</button>
      </>
    )
  }
}

export default ClassCom
