import React from "react"
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
import ItemComponent from "./components/ItemComponent"
import Head from "./components/head"
import Body from "./components/styledComponents/Body"
import PromoPage from "./components/PromoPage"
import Promotion from "./components/styledComponents/Promotion"
import StyledHeader from "./components/styledComponents/StyledHeader"
import Logo from "./components/styledComponents/Logo"
import menuData from "./components/MenuData"
import SanityData from "./components/SanityData"
import StyledClock from "./components/styledComponents/ClockStyle"

import Clock from "./components/clock"

import LanguageButton from "./components/styledComponents/LanguageButton"

function App() {
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
                <LanguageButton>EN/FR</LanguageButton>
              </StyledHeader>
              {/* <Body>
                {Object.keys(menuData).map(key => {
                  return <ItemComponent type={key} />
                })}
              </Body> */}
              <SanityData />
              <Link to="/promotion">
                <StyledFooter>
                  <Promotion src="./assets/promotion/nutella/nutellaPromo.jpg" />
                </StyledFooter>
              </Link>
            </Route>
            <Route path="/promotion">
              <PromoPage />
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
