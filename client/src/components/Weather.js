import React, { useContext, useState, useEffect } from "react"
import nightIcon from "../assets/animated/night.svg"
import dayIcon from "../assets/animated/day.svg"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import cloudDay from "../assets/animated/cloudy-day.svg"
import cloudyNight from "../assets/animated/cloudy-night.svg"
import rain1 from "../assets/animated/rainy-1.svg"
import rain2 from "../assets/animated/rainy-2.svg"
import rain7 from "../assets/animated/rainy-7.svg"
import rain6 from "../assets/animated/rainy-6.svg"
import snow from "../assets/animated/snowy-5.svg"
import thunderstorm from "../assets/animated/thunder.svg"
import CenteringDiv from "./styledComponents/CenteringDiv"
import WeatherContext from "./WeatherContext"
import WeatherIcon from "./styledComponents/WeatherIcon"
import axios from "axios"

const FrWeather = ({ language }) => {
  const { weatherData } = useContext(WeatherContext)

  const time = new Date()
  const hour = time.getHours()
  const [translation, setTranslation] = useState(null)
  const [url, setUrl] = useState(null)
  const fetchTranslation = async url => {
    const result = await axios(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    setTranslation(result.data.data.translations[0].translatedText)
  }
  if (!weatherData) {
    if (language === "fr") {
      return <div>Chargement...</div>
    } else {
      return <div>Loading...</div>
    }
  }
  let iconCode = weatherData.weather[0].icon
  let iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png"
  let main = weatherData.weather[0].main
  let description = weatherData.weather[0].description

  const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY

  if (!url) {
    let fromLang = "en"
    let toLang = "fr"
    let text = weatherData.weather[0].description
    let newUrl = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`
    newUrl += "&q=" + encodeURI(text)
    newUrl += `&source=${fromLang}`
    newUrl += `&target=${toLang}`
    setUrl(newUrl)
    return <div></div>
  }

  fetchTranslation(url)

  if (!translation) {
    return <div></div>
  }

  return (
    <CenteringDiv>
      <BrownSofiaPro>
        {language === "en"
          ? `Today's Forecast: ${weatherData.weather[0].description}`
          : `Prévisions du jour: ${translation}`}
      </BrownSofiaPro>

      {(function() {
        if (main === "Clear" && hour < 18 && hour > 6) {
          return <WeatherIcon src={dayIcon} />
        } else if (main === "Clear" && hour > 18) {
          return <WeatherIcon src={nightIcon} />
        } else if (main === "Clear" && hour > 0 && hour < 6) {
          return <WeatherIcon src={nightIcon} />
        } else if (main === "Clouds" && hour < 18 && hour > 6) {
          return <WeatherIcon src={cloudDay} />
        } else if (main === "Clouds" && hour > 18) {
          return <WeatherIcon src={cloudyNight} />
        } else if (description === "light rain") {
          return <WeatherIcon src={rain1} />
        } else if (description === "moderate rain") {
          return <WeatherIcon src={rain2} />
        } else if (description === "heavy rain") {
          return <WeatherIcon src={rain6} />
        } else if (description === "extreme rain") {
          return <WeatherIcon src={rain7} />
        } else if (main === "Snow") {
          return <WeatherIcon src={snow} />
        } else if (main === "Thunderstorm") {
          return <WeatherIcon src={thunderstorm} />
        } else {
          return <WeatherIcon src={iconURL} />
        }
      })()}
    </CenteringDiv>
  )
}

export default FrWeather
