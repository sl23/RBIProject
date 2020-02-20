import React, { useState, useEffect } from "react"

const time = new Date().toLocaleString()

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       time: new Date().toLocaleString()
//     }
//   }
//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000)
//     // built in JS function that runs a function after the delay
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalID)
//   }
//   tick() {
//     this.setState({
//       time: new Date().toLocaleString()
//     })
//   }
//   render() {
//     return <p className="App-clock">{this.state.time}.</p>
//   }
// }

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString())

  //setTime wil change time variable automatically.

  const [intervalID, setIntervalID] = useState(null)
  const tick = () => {
    setTime(new Date().toLocaleString())
  }
  const hour = new Date()
  const currentHour = hour.getHours()

  useEffect(() => {
    setIntervalID(setInterval(() => tick(), 1000))
    return clearInterval(intervalID)
  }, [])
  //empty array = makes it work as a component did mount because default behaviour = update everytime the component updates/refreshes

  //hook for life cycle componentwillMount/unmount/update
  return (
    <div>
      {time}
      {console.log(currentHour)}
      {currentHour > 4 && currentHour <= 11 && <div>Good Morning!</div>}
      {currentHour > 11 && currentHour <= 17 && <div>Good Afternoon!</div>}
      {currentHour > 17 && currentHour <= 24 && <div>Good Evening!</div>}
      {currentHour > 0 && currentHour <= 4 && <div>Hello Night Owl!</div>}
    </div>
  )
}

export default Clock
