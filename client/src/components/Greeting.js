import React, { useState, useEffect } from "react"
import Weather from "./Weather"
import Clock from "./clock"

const Greeting = () => {
  return (
    <div>
      <Clock />
      <Weather />
    </div>
  )
}
export default Greeting
