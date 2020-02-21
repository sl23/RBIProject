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
import GreetingStyle from "./components/styledComponents/GreetingStyle"
import Greeting from "./components/Greeting"
import StyledButton from "./components/styledComponents/StyledButton"

function App() {
  const langCookie = document.cookie || "language=en"

  const langExtractor = langCookie.split("=").pop()

  const [language, setLanguage] = useState(langExtractor)
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

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Head />
              <StyledHeader>
                <Logo src="./assets/logo/thlogo.png" />

                <StyledButton onClick={() => changeLanguage()}>
                  EN/FR
                </StyledButton>
              </StyledHeader>
              {/* <Body>
                {Object.keys(menuData).map(key => {
                  return <ItemComponent type={key} />
                })}
              </Body> */}
              <GreetingStyle>
                <Greeting />
              </GreetingStyle>
              <SanityData language={langExtractor} />
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
  )
}

export default App
