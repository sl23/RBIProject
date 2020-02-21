import React, { useState, useEffect } from "react"
import nightIcon from "../assets/animated/night.svg"
import dayIcon from "../assets/animated/day.svg"
import rainIcon from "../assets/animated/rainy-1.svg"

import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import cloudDay from "../assets/animated/cloudy-day.svg"
import cloudyNight from "../assets/animated/cloudy-night.svg"
import rain1 from "../assets/animated/rainy-1.svg"
import rain2 from "../assets/animated/rainy-2.svg"
import rain7 from "../assets/animated/rainy-7.svg"
import rain6 from "../assets/animated/rainy-6.svg"
import snow from "../assets/animated/snowy-5.svg"
import thunderstorm from "../assets/animated/thunder.svg"


const Weather = () => {
  const [data, setData] = useState(null)

  async function fetchData() {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=e9f0e581ccb5c2ab0d655878c8cdc745"
    )
    res
      .json()
      .then(res => setData(res))
      .catch(error => console.log(error))
  }

  const time = new Date()
  const hour = time.getHours()
  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return <div>Loading...</div>
  let iconCode = data.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png"
  let main = data.weather[0].main

  return (

    <BrownSofiaPro>
      Today's Forecast: <span></span>
      {data.weather[0].description}
      <img src={iconURL} />
      {/* <img src={nightIcon} />
      <img src={rainIcon} /> */}
    </BrownSofiaPro>

    <div>
      {console.log(hour)}
      {data.weather[0].description}
      <div>
        {(function() {
          if (main == "Clear" && hour < 18 && hour > 6) {
            return <img src={dayIcon} />
          } else if (main == "Clear" && hour > 18) {
            return <img src={nightIcon} />
          } else if (main == "Clear" && hour > 0 && hour < 6) {
            return <img src={nightIcon} />
          } else if (main == "Clouds" && hour < 18 && hour > 6) {
            return <img src={cloudDay} />
          } else if (main == "Clouds" && hour > 18) {
            return <img src={cloudyNight} />
          } else if (main == "Rain" && iconCode == 500) {
            return <img src={rain1} />
          } else if (main == "Rain" && iconCode == 501) {
            return <img src={rain2} />
          } else if (main == "Rain" && iconCode == 503) {
            return <img src={rain6} />
          } else if (main == "Rain" && iconCode == 504) {
            return <img src={rain7} />
          } else if (main == "Snow") {
            return <img src={snow} />
          } else if (main == "Thunderstorm") {
            return <img src={thunderstorm} />
          } else {
            return <img src={iconURL} />
          }
        })()}
      </div>
    </div>

  )
}

export default Weather
