import React, { useState, useEffect } from "react"
import GreasePencil from "./styledComponents/GreasePencil"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"

const time = new Date().toLocaleString()

const Clock = ({ language }) => {
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
  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  if (language === "fr") {
    dayOfWeek = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi"
    ]
  }
  const currentMonth = timeNow.getMonth()
  let months = [
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
  if (language === "fr") {
    months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "decembre"
    ]
  }
  useEffect(() => {
    setIntervalID(setInterval(() => tick(), 1000))
    return clearInterval(intervalID)
  }, [])
  //empty array = makes it work as a component did mount because default behaviour = update everytime the component updates/refreshes

  //hook for life cycle componentwillMount/unmount/update
  return (
    <div>
      {currentHour > 4 && currentHour <= 11 && (
        <GreasePencil>
          {language === "en" ? "Good Morning!" : "Bonjour!"}
        </GreasePencil>
      )}
      {currentHour > 11 && currentHour <= 17 && (
        <GreasePencil>
          {language === "en" ? "Good Afternoon!" : "Bon après-midi!"}
        </GreasePencil>
      )}
      {currentHour > 17 && currentHour <= 24 && (
        <GreasePencil>
          {" "}
          {language === "en" ? "Good Evening!" : "Bonsoir!"}
        </GreasePencil>
      )}
      {currentHour > 0 && currentHour <= 4 && (
        <GreasePencil>
          {language === "en" ? "Hello Night Owl!" : "Bonjour couche-tard!"}
        </GreasePencil>
      )}
      <BrownSofiaPro>
        {language === "en"
          ? `Today is ${dayOfWeek[currentDay]}, ${months[currentMonth]} ${currentDate},
        ${currentYear} and the local time is currently ${currentHour}:${currentMin}`
          : `Aujourd’hui, c’est le ${dayOfWeek[currentDay]} ${months[currentMonth]} 
          ${currentDate}, 
          ${currentYear} et l'heure locale est actuellement ${currentHour}:${currentMin}`}
      </BrownSofiaPro>
    </div>
  )
}

export default Clock
