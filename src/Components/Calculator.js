import React from 'react'
import { convert, toCelsius, toFahrenheit } from '../lib/convertor'
import BoilingVerdict from './BoilingVerdict'
import TempInput from './TempInput'

export default class Calclator extends React.Component {
  state = { temperature: '', scale: 'c' }

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    })
  }

  render() {
    const { temperature, scale } = this.state
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? convert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TempInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TempInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}
