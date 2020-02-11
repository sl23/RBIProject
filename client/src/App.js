import React from "react"
import logo from "./logo.svg"
import "./App.css"

import ItemComponent from "./components/ItemComponent"
import Head from "./components/head"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import PromoPage from "./components/PromoPage"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Head />
            <header>
              <img className="logo" src="./assets/logo/thlogo.png" />
            </header>
            <body>
              <p className="sofia-pro">test 1</p>
              <p className="sofia-pro-bold">test 2</p>
              <p className="grease-pencil">test 3</p>
              <ItemComponent />
            </body>
            {/* <Link to="/promotion">
              <footer>
                <img
                  className="promotion"
                  src="./assets/promotion/nutella/nutellaPromo.jpg"
                />
              </footer>
            </Link> */}
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
  )
}

export default App
