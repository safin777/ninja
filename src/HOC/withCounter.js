import React from 'react'

const withCounter = (OrignalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    }

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }))
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <OrignalComponent
            count={count}
            incrementCount={this.incrementCount}
          />
        </div>
      )
    }
  }

  return NewComponent
}

export default withCounter
