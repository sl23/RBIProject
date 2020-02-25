import React from "react"
import Weather from "./Weather"
import Clock from "./Clock"
import GreetingStyle from "./styledComponents/GreetingStyle"
const Greeting = ({ language }) => {
  return (
    <GreetingStyle>
      <Clock language={language} />
      <Weather language={language} />
    </GreetingStyle>
  )
}
export default Greeting
