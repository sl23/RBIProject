import React, { useState, useEffect } from "react"
import GreasePencil from "./styledComponents/GreasePencil"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"

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

const EngClock = () => {
  const [time, setTime] = useState(new Date().toLocaleString())

  //setTime wil change time variable automatically.

  const [intervalID, setIntervalID] = useState(null)
  const tick = () => {
    setTime(new Date().toLocaleString())
  }
  const timeNow = new Date()
  let currentHour = timeNow.getHours()
  let currentMin = timeNow.getMinutes()
  if (currentHour < 10) {
    currentHour = `0${currentHour}`
  }
  if (currentMin < 10) {
    currentMin = `0${currentMin}`
  }
  const currentDay = timeNow.getDay()
  const currentDate = timeNow.getDate()
  const currentYear = timeNow.getFullYear()
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentMonth = timeNow.getMonth()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  useEffect(() => {
    setIntervalID(setInterval(() => tick(), 1000))
    return clearInterval(intervalID)
  }, [])
  //empty array = makes it work as a component did mount because default behaviour = update everytime the component updates/refreshes

  //hook for life cycle componentwillMount/unmount/update
  return (
    <div>
      {console.log(currentHour)}
      {currentHour > 4 && currentHour <= 11 && <GreasePencil>Good Morning!</GreasePencil>}
      {currentHour > 11 && currentHour <= 17 && <GreasePencil>Good Afternoon!</GreasePencil>}
      {currentHour > 17 && currentHour <= 24 && <GreasePencil>Good Evening!</GreasePencil>}
      {currentHour > 0 && currentHour <= 4 && <GreasePencil>Hello Night Owl!</GreasePencil>}
      <BrownSofiaPro>
        Today is {dayOfWeek[currentDay]}, {months[currentMonth]} {currentDate},<span> </span>
        {currentYear}
        <span> </span>and the local time is currently {currentHour}:{currentMin}
      </BrownSofiaPro>
    </div>
  )
}

export default EngClock
