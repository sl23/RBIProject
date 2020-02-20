import React, { useState } from "react"
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
import Head from "./components/head"
import PromoPage from "./components/PromoPage"
import Promotion from "./components/styledComponents/Promotion"
import StyledHeader from "./components/styledComponents/StyledHeader"
import Logo from "./components/styledComponents/Logo"
import SanityData from "./components/SanityData"
import StyledClock from "./components/styledComponents/ClockStyle"
import Weather from "./components/Weather"
import Clock from "./components/clock"
import StyledButton from "./components/styledComponents/StyledButton"

function App() {
  const [language, setLanguage] = useState("en")
  const changeLanguage = () => {
    if (language === "en") {
      setLanguage("fr")
    } else {
      setLanguage("en")
    }
    console.log(language)
  }
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Head />
              <StyledHeader>
                <Logo src="./assets/logo/thlogo.png" />
                <StyledClock>
                  <Clock />
                </StyledClock>
                <StyledButton onClick={() => changeLanguage()}>
                  EN/FR
                </StyledButton>
              </StyledHeader>
              {/* <Body>
                {Object.keys(menuData).map(key => {
                  return <ItemComponent type={key} />
                })}
              </Body> */}
              <Weather />
              <SanityData language={language}/>
              <Link to="/promotion">
                <StyledFooter>
                  <Promotion src="./assets/promotion/nutella/nutellaPromo.jpg" />
                </StyledFooter>
              </Link>
            </Route>
            <Route path="/promotion">
              <PromoPage language={language} />
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
  )
}

export default App
