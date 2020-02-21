import React, { useState, useEffect } from "react"
import Weather from "./Weather"
import Clock from "./clock"
import GreetingStyle from "./styledComponents/GreetingStyle"
const Greeting = () => {
  return (
    <GreetingStyle>
      <Clock />
      <Weather />
    </GreetingStyle>
  )
}
export default Greeting
