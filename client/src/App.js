import React from "react"
import logo from "./logo.svg"
import "./App.css"

import ItemComponent from "./components/ItemComponent"
import Head from "./components/head"

function App() {
  return (
    <div>
      <Head />
      <header>
        <img className="logo" src="./assets/logo/thlogo.png" />
      </header>
      <body>
        <p className="sofia-pro">test 1</p>
        <p className="sofia-pro-bold">test 2</p>
        <p className="grease-pencil">test 3</p>
      </body>
      <ItemComponent />
      <footer>
        <img
          className="promotion"
          src="./assets/promotion/nutella/nutellaPromo.jpg"
        />
      </footer>
    </div>
  )
}

export default App
