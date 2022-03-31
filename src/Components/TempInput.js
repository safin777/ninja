import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}
const TempInput = ({ scale, temperature, onTemperatureChange }) => {  //destructured the props
    return (
      <>
        <fieldset>
          <legend>Enter the {scaleNames[scale]} value here</legend>
          <input
            type="number"
            value={temperature}
            onChange={onTemperatureChange}
          ></input>
        </fieldset>
      </>
    )
}

export default TempInput
