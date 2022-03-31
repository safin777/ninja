import React from 'react'

const BoilingVerdict = ({ celsius = 0 }) => {
  if (celsius >= 100) {
    return (
      <div>
        <p>The water is boiling</p>
      </div>
    )
  }
  if (celsius < 0) {
    return (
      <div>
        <p>The water is frozen</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>The water is Normal</p>
      </div>
    )
  }
}
export default BoilingVerdict
