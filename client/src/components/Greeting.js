import React, { useState, useEffect } from "react"
import Weather from "./Weather"
import Clock from "./clock"
import GreetingBackground from "./styledComponents/GreetingBackground"
import day from "../assets/daypart/day.png"

const Greeting = () => {
  return (
    <div>
      <Clock />
      <Weather />
      <GreetingBackground src={day} />
    </div>
  )
}
export default Greeting
