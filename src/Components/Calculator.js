import React from 'react'

import TempInput from './TempInput'

class Calculator extends React.Component {
  state ={
    scale : 'c',
    temperature : '',
  }

  handleChange = (scale,e) => {
     this.setState({
       temperature: e.target.value,
        scale,
     })
  }

  render() {
    const { scale, temperature } = this.state;
    return (
      <>
        <TempInput />
        <TempInput />
      </>
    )
  }
}

export default Calculator
