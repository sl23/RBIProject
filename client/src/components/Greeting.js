import React, { useState, useEffect } from "react"
import EngWeather from "./EngWeather"
import FrWeather from "./FrWeather"
import EngClock from "./EngClock"
import FrClock from "./FrClock"
import GreetingStyle from "./styledComponents/GreetingStyle"
const Greeting = ({ language }) => {
  return (
    <GreetingStyle>
      {language === "en" ? <EngClock /> : <FrClock />}
      {language === "en" ? <EngWeather /> : <FrWeather />}
    </GreetingStyle>
  )
}
export default Greeting
