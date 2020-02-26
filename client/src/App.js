import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import { ApolloProvider } from "react-apollo-hooks"
import apolloClient from "./apolloClient"
import "./App.css"
import StyledFooter from "./components/styledComponents/StyledFooter"
import PromoPage from "./components/PromoPage"
import Promotion from "./components/styledComponents/Promotion"
import StyledHeader from "./components/styledComponents/StyledHeader"
import Logo from "./components/styledComponents/Logo"
import SanityData from "./components/SanityData"
import GreetingStyle from "./components/styledComponents/GreetingStyle"
import GreasePencil from "./components/styledComponents/GreasePencil"
import Greeting from "./components/Greeting"
import StyledButton from "./components/styledComponents/StyledButton"
// import WeatherData from "./components/WeatherData"
import { WeatherProvider } from "./components/WeatherContext"
import LoadingScreen from "./components/styledComponents/LoadingScreen"
import LoaderGIF from "./components/styledComponents/LoaderGif"

function App() {
  const langCookie = document.cookie || "language=en"

  const langExtractor = langCookie.split("=").pop()

  const [language, setLanguage] = useState(langExtractor)
  const [weatherData, setData] = useState(null)
  const setCookie = lang => {
    return (document.cookie = `language=${lang}`)
  }

  const changeLanguage = () => {
    if (language === "en") {
      setCookie("fr")
      setLanguage("fr")
    } else {
      setCookie("en")
      setLanguage("en")
    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=e9f0e581ccb5c2ab0d655878c8cdc745"
      )
      res
        .json()
        .then(res => setData(res))
        .catch(error => console.log(error))
    }

    fetchData()
  }, [])
  if (!weatherData) {
    return (
      <LoadingScreen>
        <LoaderGIF src={require("./assets/logo/LogoLoader.gif")} />
      </LoadingScreen>
    )
  }

  return (
    <WeatherProvider value={{ weatherData, setData }}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <StyledHeader>
                  <Logo src="./assets/logo/thlogo.png" />

                  <StyledButton onClick={() => changeLanguage()}>
                    EN/FR
                  </StyledButton>
                </StyledHeader>
                <GreetingStyle>
                  <Greeting language={langExtractor} />
                </GreetingStyle>
                <SanityData language={langExtractor} />
                <GreasePencil>
                  {language === "en"
                    ? `Current Promotions`
                    : `Promotions en cours`}
                </GreasePencil>
                <Link to="/promotion">
                  <StyledFooter>
                    <Promotion src="./assets/promotion/nutella/nutellaPromo.jpg" />
                  </StyledFooter>
                </Link>
              </Route>
              <Route path="/promotion">
                <PromoPage language={langExtractor} />
              </Route>
              <Redirect
                to={{
                  pathname: "/"
                }}
              />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </WeatherProvider>
  )
}

export default App
