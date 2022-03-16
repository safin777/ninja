import React from 'react'

const Basic = ({locale}) => {
  return (
    <div>
      <h2>Now the time is:</h2>
      <h4>{new Date().toLocaleTimeString(locale)}</h4>
    </div>
  )
}

export default Basic
